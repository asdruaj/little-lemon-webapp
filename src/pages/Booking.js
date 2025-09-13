import React, { useReducer } from 'react'
import BookingSection from '../components/bookingSection.js/BookingSection'

const Booking = () => {
  const updateTimes = () => {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ]
  }

  const initializeTimes = () => {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ]
  }

  // eslint-disable-next-line no-unused-vars
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)

  return (
    <main>
      <BookingSection availableTimes={availableTimes} />
    </main>
  )
}

export default Booking
