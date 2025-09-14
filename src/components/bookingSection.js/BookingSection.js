import BookingForm from './BookingForm'
import '../../styles/booking.css'
import { Fragment, useEffect, useState } from 'react'

const BookingSection = ({ availableTimes, dispatch }) => {
  const reservations = JSON.parse(window.localStorage.getItem('reservations')) || []
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
                <div className='header'>
                  <h2 id='reservation-date'>{reservation.date}</h2>
                  <span>{reservation.time}</span>
                </div>
                <p>{reservation.firstName} {reservation.lastName}</p>
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
