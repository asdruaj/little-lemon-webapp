import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <section className='doormat-nav-container'>
        <img id='logo' src='/Assets/icons_assets/Logo.svg' alt='Little Lemon Logo' />
        <div className='doormat-nav'>
          <h2>Doormat Navigation</h2>
          <nav>
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#menu'>Menu</a></li>
              <li><a href='#reservations'>Reservations</a></li>
              <li><a href='#order-online'>Order Online</a></li>
            </ul>
          </nav>
        </div>

      </section>
      <section className='contact'>
        <h2>Contact</h2>
        <ul>
          <li>Phone Number</li>
          <li>Email</li>
          <li>Address</li>
        </ul>
      </section>
      <section className='social-media'>
        <h2>Social Media</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Tik Tok</li>
          <li>X</li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
