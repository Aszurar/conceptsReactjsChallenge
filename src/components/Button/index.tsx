import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: ' flex items-center justify-center rounded-lg border-0 transition-all duration-[400ms] disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      solid:
        ' p-[0.875rem] text-white bg-todo_green-500 hover:filter-brightness rounded-lg ',
      ghost:
        'text-todo_red-500 p-2 bg-transparent shadow-none rounded-md  hover:bg-todo_gray-100',
      outline:
        'text-todo_blue-500 p-2 bg-todo_gray-100 shadow-none rounded-md  border border-todo_gray-600 hover:bg-transparent hover:scale-110',
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
})

type ButtonVariants = VariantProps<typeof button>

type ButtonProps = ComponentProps<'button'> & ButtonVariants

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant })} />
}
