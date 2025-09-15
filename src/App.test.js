import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import BookingSection from './components/bookingSection.js/BookingSection'
import { initializeTimes, updateTimes } from './pages/Booking'
import BookingForm from './components/bookingSection.js/BookingForm'
import * as api from './helpers/api'

// --- Setup a clean mock for localStorage before all tests ---
beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      setItem: jest.fn(),
      getItem: jest.fn(() => null),
      removeItem: jest.fn(),
      clear: jest.fn()
    },
    writable: true
  })
})

test('Renders the BookingForm heading', () => {
  render(<BookingSection />)
  const headingElement = screen.getByRole('heading', { id: 'heading' })
  expect(headingElement).toBeInTheDocument()
})

jest.mock('./helpers/api.js', () => ({
  ...jest.requireActual('./helpers/api.js'), // Use the real fetchAPI if needed
  submitAPI: jest.fn(() => (true)) // Mock submitAPI to always resolve
}))

describe('Times functions', () => {
  beforeEach(() => {
    const mockDate = new Date('2025-01-01T12:00:00.000Z')
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate)

    jest.spyOn(api, 'fetchAPI').mockReturnValue([
      '17:00',
      '17:30',
      '18:00',
      '20:00',
      '21:00',
      '23:30'
    ])
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Initialize times returns an array with times to populate select', () => {
    expect(initializeTimes()).toEqual([
      '17:00',
      '17:30',
      '18:00',
      '20:00',
      '21:00',
      '23:30'
    ])
  })

  test('Update times returns a new array based on the dispatched action', () => {
    const action = { type: 'UPDATE_TIMES', payload: '2025-10-14' }
    const state = []

    expect(updateTimes(state, action)).toEqual([
      '17:00',
      '17:30',
      '18:00',
      '20:00',
      '21:00',
      '23:30'
    ])
  })
})

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00']
const mockHandleSubmit = jest.fn()
const mockDispatch = jest.fn()

const WrappedBookingForm = (props) => {
  return (
    <BookingForm
      {...props}
      availableTimes={mockAvailableTimes}
      onSubmit={mockHandleSubmit}
      dispatch={mockDispatch}
    />
  )
}

describe('BookingForm Multi-step Form', () => {
  test('should submit the form with valid data after completing all steps', async () => {
    render(<WrappedBookingForm />)

    // Step 1
    fireEvent.change(screen.getByLabelText(/Choose a date/i), {
      target: { value: '2025-10-14' }
    })
    fireEvent.change(screen.getByLabelText(/Choose a time/i), {
      target: { value: '17:00' }
    })
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: '4' }
    })
    fireEvent.change(screen.getByLabelText(/Ocassion/i), {
      target: { value: 'Anniversary' }
    })

    fireEvent.click(screen.getByRole('button', { name: /next/i }))

    // Step 2
    await waitFor(() => {
      expect(screen.getByLabelText(/First name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument()
    })

    fireEvent.change(screen.getByLabelText(/First name/i), {
      target: { value: 'Jane' }
    })
    fireEvent.change(screen.getByLabelText(/Last name/i), {
      target: { value: 'Doe' }
    })
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'jane.doe@example.com' }
    })
    fireEvent.change(screen.getByLabelText(/Phone number/i), {
      target: { value: '1234567890' }
    })

    fireEvent.submit(screen.getByRole('form'))

    // Check API call
    await waitFor(() => {
      expect(api.submitAPI).toHaveBeenCalledWith({
        date: '2025-10-14',
        time: '17:00',
        guests: 4,
        ocassion: 'Anniversary',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        phoneNumber: '1234567890'
      })
    })

    // 8. Now also wait for localStorage.setItem to be called
    await waitFor(() => {
      window.localStorage.setItem(
        'reservations',
        JSON.stringify([
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
        ])
      )
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'reservations',
        JSON.stringify([
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
        ])
      )
    })
  })

  test('should not transition to Step 2 and display errors if Step 1 is invalid', async () => {
    render(<WrappedBookingForm />)

    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: '11' }
    })
    fireEvent.click(screen.getByRole('button', { name: /ext/i }))

    await waitFor(() => {
      expect(screen.getByText(/Please select an option/i)).toBeInTheDocument()
      expect(screen.getByText(/10 guests max/i)).toBeInTheDocument()
      expect(
        screen.queryByLabelText(/First name/i)
      ).not.toBeInTheDocument()
    })
  })
})
