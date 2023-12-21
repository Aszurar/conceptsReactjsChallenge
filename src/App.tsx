import { ChangeEvent, FormEvent, useEffect, useReducer, useState } from 'react'
import { FiCheckSquare, FiTrash2 } from 'react-icons/fi'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { tasksReducer } from './reducer/tasks/reducer'
import {
  addNewTask,
  checkAllTasks,
  removeCheckedTasks,
  removeTask,
  toggleTask,
  uncheckAllTasks,
} from './reducer/tasks/action'

import './theme/global.css'
import { Button } from './components/Button'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TaskCard } from './components/TaskCard'
import * as Input from './components/Input'
import * as NavItem from './components/NavItem'

import { ListIcon } from './assets/icons/list'
import { ListChecksIcon } from './assets/icons/listChecks'
import { saveTasks } from './storage/tasks/saveTasks'
import { tasksGetAll } from './storage/tasks/tasksGetAll'

function App() {
  const [newTask, setNewTask] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [tasksList, dispatch] = useReducer(tasksReducer, [], () => {
    return tasksGetAll()
  })

  const [parent] = useAutoAnimate()

  function handleUpdateTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
    setErrorMessage('')
  }

  function handleAddNewTasksList(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (newTask.trim() === '') {
      setErrorMessage('É necessário adicionar uma tarefa')
      return
    }

    const isAlreadyAdded = tasksList.some((task) => task.title === newTask)

    if (isAlreadyAdded) {
      setErrorMessage('Tarefa já adicionada')
      return
    }

    const newTaskFormatted = {
      id: crypto.randomUUID(),
      title: newTask,
      isChecked: false,
      createdAt: new Date(),
    }

    dispatch(addNewTask(newTaskFormatted))
    setNewTask('')
  }

  function handleCheckTask(id: string) {
    dispatch(toggleTask(id))
  }

  function handleDeleteTask(id: string) {
    dispatch(removeTask(id))
  }

  function handleCheckAllTasks() {
    dispatch(checkAllTasks())
  }

  function handleUncheckedAllTasks() {
    dispatch(uncheckAllTasks())
  }

  function handleDeleteAllCheckedTasks() {
    dispatch(removeCheckedTasks())
  }

  const taskListComponent = tasksList.map((task) => (
    <TaskCard
      key={task.id}
      id={task.id}
      title={task.title}
      isChecked={task.isChecked}
      createdAt={task.createdAt}
      handleDeleteTask={() => handleDeleteTask(task.id)}
      handleCheckTask={() => handleCheckTask(task.id)}
    />
  ))

  useEffect(() => {
    saveTasks(tasksList)
  }, [tasksList])

  return (
    <div className="min-h-screen antialiased">
      <Header />
      <section
        className={`flex h-height justify-center bg-todo_gray-100 px-6
        py-10 dark:bg-zinc-900 sm:px-8`}
      >
        <main
          className={`-mt-48 flex w-full max-w-app flex-col rounded-2xl 
          bg-white px-5 py-6 filter-dropShadow dark:bg-zinc-800 sm:-mt-40 
          sm:px-14 sm:py-16`}
        >
          <header
            className={`relative flex w-full flex-col  justify-between 
              gap-4 md:static md:flex-row md:items-center`}
          >
            <h1
              className={`text-center text-3xl font-bold text-todo_gray-600  
                dark:text-white sm:justify-center md:text-start`}
            >
              Minhas tarefas
            </h1>
            <div
              className={` flex items-center justify-center gap-3 xs:absolute 
                  xs:bottom-1 xs:left-0 md:static`}
            >
              <NavItem.Root
                label="Desmarcar todas tarefas"
                variant="outline"
                onClick={handleUncheckedAllTasks}
              >
                <ListIcon
                  className={`h-5 w-5 fill-todo_blue-500 
                    dark:fill-todo_blue-300`}
                />
              </NavItem.Root>
              <NavItem.Root
                label="Marcar todas tarefas"
                variant="outline"
                onClick={handleCheckAllTasks}
              >
                <ListChecksIcon
                  className={`h-5 w-5 fill-todo_blue-500 
                    dark:fill-todo_blue-300`}
                />
              </NavItem.Root>

              <NavItem.Root
                label="Deletar tarefas marcadas"
                variant="outline"
                onClick={handleDeleteAllCheckedTasks}
              >
                <FiTrash2 className="h-5 w-5 " />
              </NavItem.Root>
            </div>
            <form
              id="teste"
              onSubmit={handleAddNewTasksList}
              className="flex flex-col items-center xs:items-end sm:justify-center"
            >
              <div className="flex w-full items-center gap-2 xs:w-3/5 sm:w-72">
                <Input.Root>
                  <Input.Control
                    value={newTask}
                    onChange={handleUpdateTask}
                    placeholder="Adicionar nova tarefa"
                  />
                </Input.Root>

                <Button
                  type="submit"
                  form="teste"
                  aria-label="Adicionar tarefa"
                  disabled={!!errorMessage}
                >
                  <FiCheckSquare className="h-4 w-4" />
                </Button>
              </div>
              {errorMessage && (
                <Input.ErrorMessage>{errorMessage}</Input.ErrorMessage>
              )}
            </form>
          </header>

          <section
            ref={parent}
            className={`mt-6 divide-y-2 overflow-y-auto overflow-x-hidden 
              dark:divide-zinc-600 sm:mt-12`}
          >
            {taskListComponent}
          </section>
        </main>
      </section>
      <Footer />
    </div>
  )
}

export default App
