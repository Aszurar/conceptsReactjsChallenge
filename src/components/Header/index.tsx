import { FiMoon, FiSun } from 'react-icons/fi'

import * as NavItem from '../NavItem'
import LogoSVG from '../../assets/logo.svg'
import { useTheme } from '../../hook/useTheme'

export function Header() {
  const { isDarkMode, handleToggleTheme } = useTheme()

  const lightModeIcon = {
    icon: FiSun,
    label: 'Modo Claro',
  }

  const darkModeIcon = {
    icon: FiMoon,
    label: 'Modo Escuro',
  }

  const { icon, label } = isDarkMode ? darkModeIcon : lightModeIcon

  return (
    <header
      className={`flex items-center bg-todo_blue-500 p-4 px-6 pb-48 pt-16 
      text-white sm:px-8`}
    >
      <div className="m-auto flex w-full max-w-app">
        <div className="flex flex-1 items-center justify-center">
          <img src={LogoSVG} alt="to.do" width={90} height={30} />
        </div>
        <NavItem.Root label={label} onClick={handleToggleTheme}>
          <NavItem.Icon icon={icon} className="text-3xl sm:text-2xl" />
        </NavItem.Root>
      </div>
    </header>
  )
}
