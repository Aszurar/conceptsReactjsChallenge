import LogoSVG from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-center bg-todo_blue-500 p-4 px-4 pb-48 pt-16 text-white">
      <img src={LogoSVG} alt="to.do" />
    </header>
  )
}
