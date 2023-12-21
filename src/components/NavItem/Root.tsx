import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const tooltip = tv({
  slots: {
    container: `rounded-normal bg-white px-3 py-1.5 text-sm font-medium 
      text-todo_gray-900 transition-all duration-200 animate-tooltip 
      box-shadow-tooltip dark:border-todo_blue-300`,
    button: '',
    arrow: 'fill-white',
  },
  variants: {
    variant: {
      outline: {
        container: `border border-todo_blue-500 text-todo_blue-500`,
        button: `text-todo_blue-500 p-2 bg-todo_gray-100 
        shadow-none rounded-md  border border-todo_gray-600 
        hover:bg-transparent hover:scale-110
        dark:bg-zinc-700 dark:text-todo_blue-300
        `,
        arrow: 'fill-todo_blue-500',
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
}

export function Root({
  label,
  variant,
  children,
  onClick,
  asChild = false,
}: LinkButtonProps) {
  const { arrow, button, container } = tooltip({ variant })
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger
          onClick={onClick}
          className={button()}
          asChild={asChild}
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
