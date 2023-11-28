import { ComponentProps } from 'react'

type ErrorProps = ComponentProps<'span'>

export function ErrorMessage({ ...props }: ErrorProps) {
  return (
    <span {...props} className="px-1 text-xs font-bold text-todo_red-500" />
  )
}
