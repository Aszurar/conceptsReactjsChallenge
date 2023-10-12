import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ElementType, ReactNode } from 'react'

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

type LinkButtonProps = {
  link: string
  label: string
  children: ReactNode
}

export function Root({ label, link, children }: LinkButtonProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <a
            href={link}
            target="_blank"
            className="flex  items-center justify-center text-gray-300 transition-all  hover:text-white focus:text-white"
            aria-label={label}
            rel="noreferrer"
          >
            {children}
          </a>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={5}
            className="rounded-nor text-todo_gray-900 animate-opacity box-shadow-tooltip box-shadow-focus transition-md bg-white px-3 py-1.5 font-medium"
            aria-label="."
          >
            {label}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
