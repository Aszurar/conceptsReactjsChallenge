import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const tooltip = tv({
  slots: {
    container: `rounded-normal bg-white px-3 py-1.5 text-sm font-medium 
      text-todo_gray-900 transition-all duration-400 animate-tooltip 
      box-shadow-tooltip border-2 border-zinc-200 dark:border-zinc-500 
      dark:bg-zinc-700 dark:text-white`,
    button:
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100',
    arrow: 'fill-white dark:fill-zinc-500',
  },
  variants: {
    variant: {
      outline: {
        container: `border-2 border-todo_blue-500 text-todo_blue-500 
          dark:border-todo_blue-300 dark:text-todo_blue-300`,
        button: `text-todo_blue-500 p-2 bg-todo_gray-100 transition-all 
          duration-400 shadow-none rounded-md border border-gray-300 
          hover:bg-transparent hover:scale-110 dark:border-todo_gray-600
          dark:bg-zinc-700 dark:text-todo_blue-300 dark:hover:bg-zinc-800
        `,
        arrow: 'fill-todo_blue-500 dark:fill-todo_blue-300',
      },
      solid: {
        container: '',
        button: '',
        arrow: '',
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
})

type LinkButtonProps = VariantProps<typeof tooltip> & {
  label: string
  children: ReactNode
  onClick?: () => void
  asChild?: boolean
  isDisabled?: boolean
}

export function Root({
  label,
  variant,
  children,
  onClick,
  asChild = false,
  isDisabled = false,
}: LinkButtonProps) {
  const { arrow, button, container } = tooltip({ variant })
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger
          asChild={asChild}
          aria-label={label}
          onClick={onClick}
          disabled={isDisabled}
          className={button()}
        >
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={5}
            className={container()}
            aria-label="."
          >
            {label}
            <Tooltip.Arrow className={arrow()} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
