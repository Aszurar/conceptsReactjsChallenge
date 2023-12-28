import ClipboardIMG from '../../assets/images/Clipboard.png'

export function EmptyList() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <img src={ClipboardIMG} alt="Lista vazia" width={56} height={56} />
      <div className="flex flex-col items-center justify-center text-center">
        <strong className="text=center text-todo_gray-500">
          Você ainda não tem tarefas cadastradas
        </strong>
        <span className="text-center text-todo_gray-600 dark:text-gray-300">
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  )
}
