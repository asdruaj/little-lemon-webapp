import BookingForm from './BookingForm'
import '../../styles/booking.css'
import { Fragment, useEffect, useState } from 'react'

const BookingSection = ({ availableTimes, dispatch }) => {
  const reservations = JSON.parse(localStorage.getItem('reservations')) || []
  const [isBoooking, setisBoooking] = useState(false)

  useEffect(() => {
    setisBoooking(false)
  }, [])

  return (
    <section className='booking'>

      {
        (reservations.length > 0 && isBoooking === false) &&
          <>
            <h1>Your Reservations:</h1>
            <div className='reservations-container'>

              {
            reservations.map((reservation, i) => (
              <div className='reservation' key={i}>
                <h3>{i + 1})</h3>
                <p>For: {reservation.firstName} {reservation.lastName}</p>
                <p>Date: {reservation.date}</p>
                <p>Time: {reservation.time}</p>
                <p>Table for: {reservation.guests}</p>
              </div>
            ))
          }
            </div>
            <button onClick={() => setisBoooking(true)}>Book again!</button>
          </>
        }

      {
        (reservations.length < 1 || isBoooking === true) &&
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      }

    </section>
  )
}

export default BookingSection
