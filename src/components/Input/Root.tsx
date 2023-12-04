import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>

export function Root({ ...props }: RootProps) {
  return (
    <div
      className="flex w-full  rounded-lg border border-todo_gray-500 bg-todo_gray-100 focus-within:border-todo_blue-300 focus-within:ring-4 focus-within:ring-todo_blue-50"
      {...props}
    />
  )
}
