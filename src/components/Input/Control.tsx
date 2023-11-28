import { ComponentProps } from 'react'

type ControlProps = ComponentProps<'input'>

export function Control({ ...props }: ControlProps) {
  return (
    <input
      className="text-todo_gray-800 flex rounded-lg border-0 bg-transparent px-6 py-3 outline-none placeholder:text-todo_gray-500"
      {...props}
    />
  )
}
