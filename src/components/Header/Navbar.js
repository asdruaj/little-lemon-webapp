import { Link, useLocation } from 'react-router'

const Navbar = ({ isOpen }) => {
  const { pathname } = useLocation()

  return (
    <nav className={`${isOpen ? 'open' : ''} header-nav`}>
      <ul className='nav-list'>
        <li><Link to='/'>HOME</Link></li>
        {
          pathname === '/' &&
            <li><a href='#about'>ABOUT</a></li>
        }
        <li><Link to='/menu'>MENU</Link></li>
        <li><Link to='/booking'>RESERVATIONS</Link></li>
        <li><a href='#'>ORDER ONLINE</a></li>
        <li><a href='#'>LOGIN</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
