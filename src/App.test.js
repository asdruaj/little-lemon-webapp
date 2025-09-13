import { render, screen } from '@testing-library/react'
import BookingSection from './components/bookingSection.js/BookingSection'

test('Renders the BookingForm heading', () => {
  render(<BookingSection />)
  const headingElement = screen.getByText('Book a Table!')
  expect(headingElement).toBeInTheDocument()
})
