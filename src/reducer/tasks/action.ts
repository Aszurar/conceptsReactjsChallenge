import { TaskProps } from '../../dto/task'

enum ActionTypes {
    ADD_TASK = 'ADD_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
    TOGGLE_TASK = 'TOGGLE_TASK',
    CHECK_ALL_TASKS = 'CHECK_ALL_TASKS',
    UNCHECK_ALL_TASKS = 'UNCHECK_ALL_TASKS',
    DELETE_ALL_CHECKED_TASKS = 'DELETE_ALL_CHECKED_TASKS',
}

export type Actions =
    | {
        type: ActionTypes.ADD_TASK
        payload: {
            newTask: TaskProps
        }
    }
    | {
        type: ActionTypes.TOGGLE_TASK
        payload: {
            taskId: string
        }
    }
    | {
        type: ActionTypes.REMOVE_TASK
        payload: {
            taskId: string
        }
    }
    | {
        type: ActionTypes.CHECK_ALL_TASKS
    }
    | {
        type: ActionTypes.UNCHECK_ALL_TASKS
    }
    | {
        type: ActionTypes.DELETE_ALL_CHECKED_TASKS
    }

function addNewTask(newTask: TaskProps): Actions {
    return {
        type: ActionTypes.ADD_TASK,
        payload: {
            newTask,
        },
    } satisfies Actions
}

function toggleTask(taskId: string): Actions {
    return {
        type: ActionTypes.TOGGLE_TASK,
        payload: {
            taskId,
        },
    } satisfies Actions
}

function removeTask(taskId: string): Actions {
    return {
        type: ActionTypes.REMOVE_TASK,
        payload: {
            taskId,
        },
    } satisfies Actions
}

function checkAllTasks(): Actions {
    return {
        type: ActionTypes.CHECK_ALL_TASKS,
    } satisfies Actions
}

function uncheckAllTasks(): Actions {
    return {
        type: ActionTypes.UNCHECK_ALL_TASKS,
    } satisfies Actions
}

function removeCheckedTasks(): Actions {
    return {
        type: ActionTypes.DELETE_ALL_CHECKED_TASKS,
    } satisfies Actions
}

export {
    ActionTypes,
    addNewTask,
    toggleTask,
    removeTask,
    checkAllTasks,
    uncheckAllTasks,
    removeCheckedTasks,
}
