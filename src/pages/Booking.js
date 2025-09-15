import React, { useReducer } from 'react'
import BookingSection from '../components/bookingSection.js/BookingSection'
import { fetchAPI } from '../helpers/api'

export const initializeTimes = () => {
  const today = new Date()
  return fetchAPI(today)
}

export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    const newDate = new Date(action.payload)

    return fetchAPI(newDate)
  } else {
    return state
  }
}

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  return (
    <main>
      <BookingSection availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  )
}

export default Booking
