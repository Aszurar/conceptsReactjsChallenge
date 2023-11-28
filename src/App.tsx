import { ChangeEvent, FormEvent, useState } from 'react'
import { FiCheckSquare } from 'react-icons/fi'

import './theme/global.css'
import { Button } from './components/Button'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import * as Input from './components/Input'
import { TaskCard } from './components/TaskCard'

import { TaskProps } from './dto/taskDTO'

function App() {
  const [newTask, setNewTask] = useState('')
  const [tasksList, setTasksList] = useState<TaskProps[]>([])
  const [errorMessage, setErrorMessage] = useState('')

  function handleUpdateTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleUpdateTasksList(event: FormEvent<HTMLFormElement>) {
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

    setTasksList((prevState) => [...prevState, newTaskFormatted])
    setNewTask('')
  }

  function handleCheckTask(id: string) {
    const updatedTasksList = tasksList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked,
        }
      }

      return task
    })

    setTasksList(updatedTasksList)
  }

  function handleDeleteTask(id: string) {
    const newTasksList = tasksList.filter((task) => task.id !== id)
    setTasksList(newTasksList)
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

  return (
    <div className="min-h-screen antialiased">
      <Header />
      <section className=" flex  h-height justify-center bg-todo_gray-100 px-4 py-10">
        <main
          className="-mt-40 flex w-full max-w-[70rem] flex-col rounded-2xl bg-white px-14 py-16
filter-dropShadow"
        >
          <header className="flex w-full  items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-todo_gray-600">
              Minhas tarefas
            </h1>
            <form
              id="teste"
              onSubmit={handleUpdateTasksList}
              className="flex items-center gap-1"
            >
              <div>
                <Input.Root>
                  <Input.Control
                    value={newTask}
                    onChange={handleUpdateTask}
                    placeholder="Adicionar nova tarefa"
                  />
                </Input.Root>
                {errorMessage && (
                  <Input.ErrorMessage>{errorMessage}</Input.ErrorMessage>
                )}
              </div>

              <Button type="submit" form="teste" aria-label="Adicionar tarefa">
                <FiCheckSquare className="h-4 w-4" />
              </Button>
            </form>
          </header>

          <section className="mt-12">{taskListComponent}</section>
        </main>
      </section>
      <Footer />
    </div>
  )
}

export default App
