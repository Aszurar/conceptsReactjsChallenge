import { ChangeEvent, FormEvent, useEffect, useReducer, useState } from 'react'
import * as Sentry from '@sentry/react'
import * as Dialog from '@radix-ui/react-dialog'
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
import { TaskCardMemoized } from './components/TaskCard'
import * as Input from './components/Input'
import * as NavItem from './components/NavItem'

import { ListIcon } from './assets/icons/list'
import { ListChecksIcon } from './assets/icons/listChecks'
import { saveTasks } from './storage/tasks/saveTasks'
import { tasksGetAll } from './storage/tasks/tasksGetAll'
import { axeAccessibilityReporter } from './utils/axeAccessibilityReporter'
import { EmptyList } from './components/EmptyList'

axeAccessibilityReporter()

Sentry.init({
  dsn: 'https://32649f07ffe6607d254f7b87a95e8062@o4505921743552512.ingest.sentry.io/4506469302272000',
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: [
        'localhost',
        /^https:\/\/todo-aszurar\.netlify\.app\//,
      ],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

function App() {
  const [newTask, setNewTask] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [tasksList, dispatch] = useReducer(tasksReducer, [], () => {
    return tasksGetAll()
  })

  const [parent] = useAutoAnimate()

  const isThereTasks = tasksList.length > 0
  const isThereCheckedTasks = tasksList.some((task) => task.isChecked)

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

  const taskListComponent = isThereTasks ? (
    tasksList.map((task) => (
      <TaskCardMemoized
        key={task.id}
        id={task.id}
        title={task.title}
        isChecked={task.isChecked}
        createdAt={task.createdAt}
        handleDeleteTask={() => handleDeleteTask(task.id)}
        handleCheckTask={() => handleCheckTask(task.id)}
      />
    ))
  ) : (
    <EmptyList />
  )

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
              className={`text-center text-3xl font-semibold text-todo_gray-600  
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
                isDisabled={!isThereTasks}
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
                isDisabled={!isThereTasks}
                onClick={handleCheckAllTasks}
              >
                <ListChecksIcon
                  className={`h-5 w-5 fill-todo_blue-500 
                    dark:fill-todo_blue-300`}
                />
              </NavItem.Root>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <NavItem.Root
                    label="Deletar tarefas marcadas"
                    variant="outline"
                    isDisabled={!isThereTasks || !isThereCheckedTasks}
                  >
                    <FiTrash2 className="h-5 w-5 " />
                  </NavItem.Root>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-todo_dark-50">
                    <Dialog.Content
                      className={`fixed left-1/2 top-1/2 mx-auto my-0 flex 
                      w-80 max-w-md -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-xl 
                      border-4 border-todo_blue-300 bg-white 
                      p-6  dark:bg-zinc-800 sm:w-full sm:p-12`}
                    >
                      <Dialog.Title
                        className={`text-center text-2xl font-semibold 
                        text-todo_gray-800 dark:text-white`}
                      >
                        Excluir comentário
                      </Dialog.Title>
                      <Dialog.Description
                        className={`text-center text-lg
                         text-gray-600 dark:text-todo_gray-500`}
                      >
                        Você tem certeza que gostaria de excluir esse(s)
                        comentário(s)?
                      </Dialog.Description>
                      <footer className="flex items-center justify-center gap-4">
                        <Dialog.Close asChild className="w-full">
                          <Button variant="modal">Cancelar</Button>
                        </Dialog.Close>
                        <Dialog.Close className="w-full">
                          <Button
                            variant="modal"
                            onClick={handleDeleteAllCheckedTasks}
                            className={`text-todo_red-500 dark:text-red-400`}
                          >
                            Sim, excluir
                          </Button>
                        </Dialog.Close>
                      </footer>
                    </Dialog.Content>
                  </Dialog.Overlay>
                </Dialog.Portal>
              </Dialog.Root>
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
