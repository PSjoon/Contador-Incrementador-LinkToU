import { RiGitRepositoryFill } from "react-icons/ri"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export function Header() {
  return (
    <header>
      <img
        src="https://web-summit-avenger.imgix.net/production/logos/original/6327c3094eb4cdae51fbc7f43e605aff6aa2dc2a.png"
        alt="logo"
        title="logo"
        className="logo"
      />

      <nav>
        <a
          href="https://github.com/PSjoon/Contador-Incrementador-LinkToU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiGitRepositoryFill size={40} />
        </a>
        <a
          href="https://github.com/PSjoon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/pedrosantosjoon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} />
        </a>
      </nav>
    </header>
  )
}
