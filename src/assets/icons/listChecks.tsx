import { ComponentProps } from 'react'

type ListProps = ComponentProps<'svg'>

export function ListChecksIcon(props: ListProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#fff"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M228 128a12 12 0 01-12 12h-88a12 12 0 010-24h88a12 12 0 0112 12zM128 76h88a12 12 0 000-24h-88a12 12 0 000 24zm88 104h-88a12 12 0 000 24h88a12 12 0 000-24zM79.51 39.51L56 63l-7.51-7.52a12 12 0 00-17 17l16 16a12 12 0 0017 0l32-32a12 12 0 00-17-17zm0 64L56 127l-7.51-7.52a12 12 0 10-17 17l16 16a12 12 0 0017 0l32-32a12 12 0 00-17-17zm0 64L56 191l-7.51-7.52a12 12 0 10-17 17l16 16a12 12 0 0017 0l32-32a12 12 0 00-17-17z"></path>
    </svg>
  )
}
