import ShootingStarSVG from '../../assets/shooting-star.svg'

import { Github, Linkedin } from 'lucide-react'
import * as NavItem from '../NavItem'

export function Footer() {
  return (
    <footer className="bg-todo_blue-500 flex items-center justify-center gap-6 px-8 py-4">
      <strong className="text-todo_gray-100 flex gap-1.5">
        Desenvolvido por
        <img src={ShootingStarSVG} alt="" className="h-5 w-5" />
        <span className="font-normal text-white">
          Lucas de Lima Martins de Souza.
        </span>
      </strong>
      <nav className=" flex items-center justify-center gap-2">
        <NavItem.Root
          label="Acessar Github"
          link="https://github.com/Aszurar/to.do"
        >
          <Github />
        </NavItem.Root>

        <NavItem.Root
          label="Acessar Linkedin"
          link="https://www.linkedin.com/in/lucas-de-lima-azsura/"
        >
          <Linkedin />
        </NavItem.Root>
      </nav>
    </footer>
  )
}
