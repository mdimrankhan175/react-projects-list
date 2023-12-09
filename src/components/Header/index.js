// hai
import './index.css'
import {FaLinkedin, FaGithub, FaYoutube} from 'react-icons/fa'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://res.cloudinary.com/dbelvmspz/image/upload/v1660558582/imran_logo_zh0c8u.jpg"
        alt="Website Logo"
      />
      <ul className="nav-menu">
        <li>
          <a
            href="https://www.linkedin.com/in/imrankhanmohammad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="linkedin-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mdimrankhan175"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="github-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="youtube-icon" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
