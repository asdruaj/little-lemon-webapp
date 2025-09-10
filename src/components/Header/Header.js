import { useState } from 'react'
import '../../styles/header.css'
import Navbar from './Navbar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <img src='/Assets/icons_assets/Logo.svg' alt='little lemon logo' />
      <img onClick={() => setIsOpen(!isOpen)} className='hamburguer-icon' src='/Assets/icons_assets/icon_hamburger_menu.svg' alt='little lemon logo' />

      <Navbar isOpen={isOpen} />
    </header>

  )
}

export default Header
