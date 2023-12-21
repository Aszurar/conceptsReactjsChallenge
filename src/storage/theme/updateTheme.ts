import { ITheme } from '../../dto/theme'
import { TASKS_THEME } from '../storageConfig'

export function updateTheme(theme: ITheme) {
  localStorage.setItem(TASKS_THEME, JSON.stringify(theme))
}
