import BookingForm from './BookingForm'
import './booking.css'

const BookingSection = ({ availableTimes }) => {
  return (
    <section className='booking'>
      <h1>Book a Table!</h1>
      <BookingForm availableTimes={availableTimes} />
    </section>
  )
}

export default BookingSection
