import { TaskProps } from '../../dto/task'
import { TASKS_COLLECTION } from '../storageConfig'

export function tasksGetAll(): TaskProps[] {
  const storage = localStorage.getItem(TASKS_COLLECTION)

  return storage ? JSON.parse(storage) : ([] as TaskProps[])
}
