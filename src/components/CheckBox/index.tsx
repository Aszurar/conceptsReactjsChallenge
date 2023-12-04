import * as Checkbox from '@radix-ui/react-checkbox'

import { FiCheck } from 'react-icons/fi'
import { tv } from 'tailwind-variants'
import { TaskProps } from '../../dto/task'

type TaskPropsWithoutCreatedAt = Omit<TaskProps, 'createdAt'>

type CheckBoxProps = TaskPropsWithoutCreatedAt & {
  handleCheckTask: () => void
}

const label = tv({
  base: 'text-todo_gray-800 cursor-pointer overflow-hidden break-all',
  variants: {
    isChecked: {
      true: 'line-through text-todo_gray-500',
      false: '',
    },
  },

  defaultVariants: {
    isChecked: false,
  },
})

export function CheckBox({
  id,
  title,
  isChecked,
  handleCheckTask,
}: CheckBoxProps) {
  console.log('id', id)
  return (
    <div className="flex w-full cursor-pointer items-center gap-3 ">
      <Checkbox.Root
        id={id}
        checked={isChecked}
        className={` 
        flex h-5 w-5 items-center justify-center rounded-md 
        border-2 border-transparent bg-todo_gray-100 ring-1 transition-all 
        duration-[200ms] hover:border-2 hover:border-todo_blue-500 hover:ring-todo_blue-50 
        data-[state=checked]:bg-todo_blue-500 
        data-[state=unchecked]:bg-todo_gray-100`}
        onCheckedChange={handleCheckTask}
        aria-label="Marcar tarefa como concluída"
      >
        <Checkbox.Indicator className="flex items-center justify-center">
          <FiCheck className=" h-4 w-4 text-white" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={label({ isChecked })} htmlFor={id}>
        {title}
      </label>
    </div>
  )
}
