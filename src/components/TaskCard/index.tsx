import { Button } from '../Button'
import { CheckBox } from '../CheckBox'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { utcToZonedTime } from 'date-fns-tz'
import { FiTrash } from 'react-icons/fi'
import { TaskProps } from '../../dto/task'
import { memo } from 'react'

type TaskCardProps = TaskProps & {
  handleCheckTask: () => void
  handleDeleteTask: () => void
}

export function TaskCard({
  id,
  createdAt,
  handleDeleteTask,
  ...props
}: TaskCardProps) {
  const createdAtDate = new Date(createdAt)
  const createdAtDateFormattedRelativeNow = formatDistanceToNow(createdAtDate, {
    locale: ptBR,
    addSuffix: true,
  })
  const timeZone = 'America/Sao_Paulo'
  const zonedDate = utcToZonedTime(createdAtDate, timeZone)
  const formattedZonedDate = format(
    zonedDate,
    "dd 'de' MMMM 'de' yyyy, 'às' HH:mm:ss",
    { locale: ptBR },
  )
  const formattedDateUTCISO = format(
    createdAtDate,
    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
    { locale: ptBR },
  )

  return (
    <article className="flex flex-col gap-0.5 p-4">
      <div className="flex items-center justify-between gap-3">
        <CheckBox {...props} id={id} />
        <Button
          variant="ghost"
          aria-label="Deletar tarefa"
          onClick={handleDeleteTask}
        >
          <FiTrash className="h-4 w-4" />
        </Button>
      </div>
      <time
        className={`text-right text-xs font-semibold text-todo_blue-400 
          dark:text-todo_blue-300`}
        title={formattedZonedDate}
        dateTime={formattedDateUTCISO}
      >
        {createdAtDateFormattedRelativeNow}
      </time>
    </article>
  )
}

export const TaskCardMemoized = memo(TaskCard, (prevProps, nextProps) => {
  return prevProps.isChecked === nextProps.isChecked
})
