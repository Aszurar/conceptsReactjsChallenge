import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

type IconProps = ComponentProps<'span'> & {
  icon: ElementType
}

export function Icon({ icon: Icon, ...rest }: IconProps) {
  return (
    <span {...rest}>
      <Icon />
    </span>
  )
}

const tooltip = tv({
  slots: {
    container:
      'rounded-nor bg-white px-3 py-1.5 text-sm font-medium text-todo_gray-900 transition-all duration-[200ms] animate-opacity box-shadow-tooltip ',
    arrow: 'fill-white',
  },
  variants: {
    variant: {
      outline: {
        container: ' border border-todo_blue-500',
        arrow: 'fill-todo_blue-500',
      },
      solid: {
        container: '',
        arrow: '',
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
})

type LinkButtonProps = VariantProps<typeof tooltip> & {
  children: ReactNode
  label: string
}

export function Root({ label, children, variant }: LinkButtonProps) {
  const { arrow, container } = tooltip({ variant })
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>{children}</Tooltip.Trigger>
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
