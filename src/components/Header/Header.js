import { useEffect, useState } from 'react'
import '../../styles/header.css'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header>
      <Link to='/'><img src='/Assets/icons_assets/Logo.svg' alt='little lemon logo' /></Link>
      <img onClick={() => setIsOpen(!isOpen)} className='hamburguer-icon' src='/Assets/icons_assets/icon_hamburger_menu.svg' alt='little lemon logo' />

      <Navbar isOpen={isOpen} />
    </header>

  )
}

export default Header
