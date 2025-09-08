const Navbar = ({ isOpen }) => {
  return (
    <nav className={`${isOpen ? 'open' : ''} header-nav`}>
      <ul className='nav-list'>
        <li><a href='#'>HOME</a></li>
        <li><a href='#'>ABOUT</a></li>
        <li><a href='#'>MENU</a></li>
        <li><a href='#'>RESERVATIONS</a></li>
        <li><a href='#'>ORDER ONLINE</a></li>
        <li><a href='#'>LOGIN</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
