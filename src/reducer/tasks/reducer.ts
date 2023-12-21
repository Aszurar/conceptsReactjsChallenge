import { produce } from 'immer'
import { TaskProps } from '../../dto/task'
import { ActionTypes, Actions } from './action'

export function tasksReducer(
  state: TaskProps[] = [],
  action: Actions,
): TaskProps[] {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return produce(state, (draftState) => {
        draftState.push(action.payload.newTask)
      })
    case ActionTypes.TOGGLE_TASK: {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.taskId,
      )

      if (taskIndex < 0) {
        return state
      }
      return produce(state, (draftState) => {
        draftState[taskIndex].isChecked = !draftState[taskIndex].isChecked
      })
    }
    case ActionTypes.REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.taskId)
    case ActionTypes.CHECK_ALL_TASKS:
      return produce(state, (draftState) => {
        draftState.forEach((task) => {
          task.isChecked = true
        })
      })
    case ActionTypes.UNCHECK_ALL_TASKS:
      return produce(state, (draftState) => {
        draftState.forEach((task) => {
          task.isChecked = false
        })
      })
    case ActionTypes.DELETE_ALL_CHECKED_TASKS: {
      const checkedTasksList = state.filter((task) => task.isChecked)
      return state.filter((task) => !checkedTasksList.includes(task))
    }
    default:
      return state
  }
}
