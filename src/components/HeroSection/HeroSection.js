import React from 'react'
import Button from '../Button'

const HeroSection = ({ navigate }) => {
  return (
    <section className='hero'>
      <div className='first-column'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos doloremque autem consequuntur, nihil dignissimos neque officia aspernatur non, possimus, iure ipsa dictaiciendis.</p>
        <Button onClick={() => navigate('/booking')}>Reserve a Table</Button>
      </div>
      <div className='image-container'>

        <img src='./Assets/icons_assets/restauranfood.jpg' alt='Server carrying a dish' />
      </div>
    </section>
  )
}

export default HeroSection
