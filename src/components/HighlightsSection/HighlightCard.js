import React from 'react'
import '../../styles/highlightsCard.css'

const HighlightCard = ({ imgSrc, title, price, description }) => {
  return (
    <div className='card-container'>
      <img src={imgSrc} alt={`${title} image`} />
      <div className='title-container'>
        <h3>{title}</h3>
        <span>$ {price}</span>
      </div>
      <p>{description}</p>
      <button>Order Delivery</button>
    </div>
  )
}

export default HighlightCard
