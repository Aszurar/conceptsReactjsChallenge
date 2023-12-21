import { ComponentProps } from 'react'

type ErrorProps = ComponentProps<'span'>

export function ErrorMessage({ ...props }: ErrorProps) {
  return (
    <span
      {...props}
      className={`mt-1 px-1 text-xs font-bold text-todo_red-500 
        dark:text-red-400`}
    />
  )
}
