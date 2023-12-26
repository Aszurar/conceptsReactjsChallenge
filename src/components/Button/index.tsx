import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: `flex p-2 items-center justify-center rounded-lg border-0 transition-all 
    duration-400  disabled:cursor-not-allowed disabled:opacity-50`,
  variants: {
    variant: {
      solid: `p-3.5 text-white bg-todo_green-500 hover:filter-brightness`,
      ghost: `text-todo_red-500 dark:text-red-400 bg-transparent shadow-none 
        rounded-md  hover:bg-todo_gray-100 dark:hover:bg-zinc-600`,
      outline: `text-todo_blue-500 bg-todo_gray-100 shadow-none rounded-md  
      border border-todo_gray-600 hover:bg-transparent hover:scale-110
      dark:bg-zinc-700 dark:text-todo_blue-300`,
      modal: `w-full border border-gray-300 bg-todo_gray-100 text-todo_gray-800 
      hover:bg-white dark:border-zinc-500 dark:bg-zinc-700 
      dark:text-todo_gray-100 dark:hover:bg-transparent`,
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
})

type ButtonVariants = VariantProps<typeof button>

type ButtonProps = ComponentProps<'button'> & ButtonVariants

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
