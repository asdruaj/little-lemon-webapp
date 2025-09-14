import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import BookingSection from './components/bookingSection.js/BookingSection'
import { initializeTimes } from './pages/Booking'
import BookingForm from './components/bookingSection.js/BookingForm'

test('Renders the BookingForm heading', () => {
  render(<BookingSection />)
  const headingElement = screen.getByText('Book a Table!')
  expect(headingElement).toBeInTheDocument()
})

describe('Times functions', () => {
  test('Initialize times returs array with times to populate select', () => {
    expect(initializeTimes()).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ])
  })
  test('Update times returs array with times to populate select', () => {
    expect(initializeTimes()).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ])
  })
})

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00']
const mockHandleSubmit = jest.fn()

// Create a wrapper component to pass props to BookingForm
const WrappedBookingForm = (props) => {
  return <BookingForm {...props} availableTimes={mockAvailableTimes} onSubmit={mockHandleSubmit} />
}

describe('BookingForm Multi-step Form', () => {
  // Test for a successful form submission
  test('should submit the form with valid data after completing all steps', async () => {
    // 1. Render the component
    render(<WrappedBookingForm />)

    // 2. Fill out Step 1
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2025-10-14' } })
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } })
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } })
    fireEvent.change(screen.getByLabelText(/Ocassion/i), { target: { value: 'Anniversary' } })

    // 3. Click the 'Next' button to transition to Step 2
    fireEvent.click(screen.getByRole('button', { name: /Next/i }))

    // 4. Assert that Step 2 is now visible
    // We use await waitFor to wait for the DOM to update after the state change
    await waitFor(() => {
      expect(screen.getByLabelText(/First name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument()
    })

    // 5. Fill out Step 2
    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'Jane' } })
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'jane.doe@example.com' } })
    fireEvent.change(screen.getByLabelText(/Phone number/i), { target: { value: '1234567890' } })

    // 6. Click the 'Reserve!' button to submit the form
    fireEvent.click(screen.getByRole('button', { name: /Reserve!/i }))

    // 7. Assert that the onSubmit function was called with the correct data
    await waitFor(() => {
      // The onSubmit prop is called by formik's handleSubmit, so we check that
      // the alert function received the correct data
      expect(mockHandleSubmit).toHaveBeenCalledWith(
        {
          date: '2025-10-14',
          time: '17:00',
          guests: 4,
          ocassion: 'Anniversary',
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@example.com',
          phoneNumber: '1234567890'
        }
      )
    })
  })

  // Test for invalid form submission
  test('should not transition to Step 2 and display errors if Step 1 is invalid', async () => {
    // 1. Render the component
    render(<WrappedBookingForm />)

    // 2. Leave required fields empty or with invalid data in Step 1
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '11' } }) // Invalid guest count
    fireEvent.click(screen.getByRole('button', { name: /ext/i }))

    // 3. Assert that the errors are displayed and Step 2 is not visible
    await waitFor(() => {
      expect(screen.getByText(/Please select an option/i)).toBeInTheDocument()
      expect(screen.getByText(/10 guests max/i)).toBeInTheDocument()
      expect(screen.queryByLabelText(/First name/i)).not.toBeInTheDocument() // Step 2 fields should not be visible
    })
  })
})
