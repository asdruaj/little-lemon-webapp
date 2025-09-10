import React from 'react'

const TestimonialCard = ({ rating, imgSrc, firstName, lastName, review }) => {
  return (
    <div className='testimonial-card'>
      <span>Rating: {rating} ⭐</span>
      <div className='firstRow'>
        <img src={imgSrc} alt={`${firstName} ${lastName} Profile Pic`} />
        <span>{firstName} {lastName}</span>
      </div>
      <div className='secondRow'>
        <span>Review</span>
        <p>{review}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
