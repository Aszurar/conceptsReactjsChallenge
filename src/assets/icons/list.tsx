import { ComponentProps } from 'react'

type ListProps = ComponentProps<'svg'>

export function ListIcon(props: ListProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#fff"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M228 128a12 12 0 01-12 12H40a12 12 0 010-24h176a12 12 0 0112 12zM40 76h176a12 12 0 000-24H40a12 12 0 000 24zm176 104H40a12 12 0 000 24h176a12 12 0 000-24z"></path>
    </svg>
  )
}
