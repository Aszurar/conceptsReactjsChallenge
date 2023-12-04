import { TaskProps } from '../../dto/task'
import { TASKS_COLLECTION } from '../storageConfig'

export function saveTasks(tasks: TaskProps[]) {
    localStorage.setItem(TASKS_COLLECTION, JSON.stringify(tasks))
}
