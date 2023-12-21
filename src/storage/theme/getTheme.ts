import { TASKS_THEME } from '../storageConfig'

export function getTheme() {
  const response = localStorage.getItem(TASKS_THEME)

  const theme = response ? JSON.parse(response) : 'light'

  return theme
}
