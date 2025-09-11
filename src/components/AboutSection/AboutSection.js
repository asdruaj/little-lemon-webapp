import '../../styles/about.css'

const AboutSection = () => {
  return (
    <section className='about'>
      <div className='first-column'>
        <h2>Adrian & Mario</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos doloremque autem consequuntur, nihil dignissimos neque officia aspernatur non, possimus, iure ipsa dictaiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad vero nulla saepe soluta at voluptatem, quibusdam repellendus reiciendis ratione veritatis voluptate debitis quos. Deleniti reiciendis libero voluptatibus assumenda nam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero autem eius voluptates id quae quam deleniti laboriosam omnis voluptatem amet, quas eos quibusdam cupiditate mollitia labore similique doloribus? Suscipit, corporis!lorem</p>
      </div>

      <div className='image-container'>
        <img className='topImg' src='./Assets/icons_assets/marioandadrian1.jpg' alt='Mario and Adrian cooking and laughing' />
        <img className='bottomImg' src='./Assets/icons_assets/marioandadrian2.jpg' alt='Mario and Adrian cooking and laughing' />

      </div>
    </section>
  )
}

export default AboutSection
