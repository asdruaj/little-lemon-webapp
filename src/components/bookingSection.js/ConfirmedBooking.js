import React from 'react'
import CheckIcon from './CheckIcon'
import { useNavigate } from 'react-router'

const ConfirmedBooking = ({ data }) => {
  const navigate = useNavigate()

  return (
    <div className='confirmed-container'>
      <CheckIcon size={120} />
      <h3>Reservation Summary: </h3>
      <ul>
        <li>{data?.firstName} {data?.lastName}</li>
        <li>{data?.date}</li>
        <li>{data?.time}</li>
        <li>Table for: {data?.guests}</li>
        <li>{data?.ocassion}</li>
      </ul>

      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  )
}

export default ConfirmedBooking
