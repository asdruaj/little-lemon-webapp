import * as Yup from 'yup'
import { useFormik } from 'formik'
import '../../styles/booking.css'
import WarningIcon from './WarningIcon'
import { useState } from 'react'
import BackIcon from './BackIcon'
import { submitAPI } from '../../helpers/api'
import ConfirmedBooking from './ConfirmedBooking'

const BookingForm = ({ availableTimes, dispatch, data }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const handleDateChange = (e) => {
    formik.handleChange(e)

    dispatch({ type: 'UPDATE_TIMES', payload: e.target.value })
  }

  const validationSchema = Yup.object({
    date: Yup.date()
      .min(new Date().toISOString().slice(0, 10), 'Date must be equal or latter than today')
      .required('Please choose a date'),
    time: Yup.string()
      .required('Please select an option'),
    guests: Yup.number()
      .min(1, '1 guest minimum')
      .max(10, '10 guests max')
      .required('Please, choose a number of guests'),
    ocassion: Yup.string()
      .required('Please, select an option'),
    firstName: Yup.string().required('Field cannot be empty').max(15),
    lastName: Yup.string().required('Field cannot be empty').max(15),
    email: Yup.string().email('Invalid email').required('Field cannot be empty'),
    phoneNumber: Yup.string().required('Field cannot be empty')

  })

  const formik = useFormik({
    initialValues: {
      date: new Date().toISOString().slice(0, 10),
      time: '',
      guests: 1,
      ocassion: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    },
    onSubmit: (values) => {
      (submitAPI(values)).then(() => {
        setFormData(values)
        setStep(3)
        const reservations = JSON.parse(window.localStorage.getItem('reservations')) || []
        reservations.push(values)
        window.localStorage.setItem('reservations', JSON.stringify(reservations))
      })
    },
    validationSchema
  })

  const handleNext = async () => {
    const errors = await formik.validateForm()

    const currentStepFields = ['date', 'time', 'guests', 'ocassion']

    const hasErrors = currentStepFields.some(field => errors[field])

    const touchedEntries = currentStepFields.map(field => (
      [field, true]
    ))

    const touchedObject = Object.fromEntries(touchedEntries)

    formik.setTouched(touchedObject)

    if (!hasErrors) {
      setStep(2)
    }
  }

  return (
    <>
      <h1 id='heading'>{step === 1 && 'Book a Table'}{step === 2 && 'Almost there!'}{step === 3 && "We're all set!"}</h1>

      <form className='booking-form' onSubmit={formik.handleSubmit} aria-label='Book a table'>

        {
        step === 1 &&
          <>
            <div className='form-element'>
              <label htmlFor='date'>Choose a date</label>
              <input type='date' name='date' id='date' required {...formik.getFieldProps('date')} onChange={handleDateChange} />
              {formik.touched.date && formik.errors.date &&
                <div className='error-container'>
                  <WarningIcon />
                  <span className='error'>{formik.errors.date}</span>
                </div>}
            </div>
            <div className='form-element'>
              <label htmlFor='time'>Choose a time</label>
              <select name='time' id='time' required {...formik.getFieldProps('time')}>
                <option value=''>Choose an option...</option>
                {
              availableTimes?.map((time, i) => (
                <option key={i} value={time}>{time}</option>
              ))
            }
              </select>
              {formik.touched.time && formik.errors.time &&
                <div className='error-container'>
                  <WarningIcon />
                  <span className='error'>{formik.errors.time}</span>
                </div>}
            </div>
            <div className='form-element'>
              <label htmlFor='guests'>Number of guests</label>
              <input type='number' name='guests' id='guests' min='1' max='10' required {...formik.getFieldProps('guests')} />
              {formik.touched.guests && formik.errors.guests &&
                <div className='error-container'>
                  <WarningIcon />
                  <span className='error'>{formik.errors.guests}</span>
                </div>}
            </div>
            <div className='form-element'>
              <label htmlFor='ocassion'>Ocassion</label>
              <select name='ocassion' id='ocassion' required {...formik.getFieldProps('ocassion')}>
                <option value=''>Choose an option...</option>
                <option value='Birthday'>Birthday</option>
                <option value='Anniversary'>Anniversary</option>
                <option value='Engagement'>Engagement</option>
                <option value='Others'>Others</option>
              </select>
              {formik.touched.ocassion && formik.errors.ocassion &&
                <div className='error-container'>
                  <WarningIcon />
                  <span className='error'>{formik.errors.ocassion}</span>
                </div>}
            </div>
            <button name='next' type='button' onClick={handleNext}>Next</button>
          </>
      }

        {
        step === 2 &&
          <>
            <div className='form-element'>
              <label htmlFor='firstName'>First name</label>
              <input name='firstName' id='firstName' required {...formik.getFieldProps('firstName')} />
              {formik.touched.firstName && formik.errors.firstName &&
                <div className='error-container'>
                  <WarningIcon />
                  <span className='error'> {formik.errors.firstName}</span>
                </div>}
            </div>

            <div className='form-element'>
              <label htmlFor='lastName'>Last name</label>
              <input name='lastName' id='lastName' required {...formik.getFieldProps('lastName')} />
              {formik.touched.lastName && formik.errors.lastName &&
                <div className='error-container'>
                  <WarningIcon />
                  <span className='error'>{formik.errors.lastName}</span>
                </div>}
            </div>

            <div className='form-element'>
              <label htmlFor='email'>Email</label>
              <input name='email' id='email' required {...formik.getFieldProps('email')} />
              {formik.touched.email && formik.errors.email &&
                <div className='error-container'>
                  <WarningIcon />
                  <span>{formik.errors.email}</span>
                </div>}
            </div>

            <div className='form-element'>
              <label htmlFor='phoneNumber'>Phone number</label>
              <input name='phoneNumber' id='phoneNumber' required {...formik.getFieldProps('phoneNumber')} />
              {formik.touched.phoneNumber && formik.errors.phoneNumber &&
                <div className='error-container'>
                  <WarningIcon />
                  <span className='error'>{formik.errors.phoneNumber}</span>
                </div>}
            </div>

            <button type='submit' name='reserve'>Reserve!</button>
          </>
      }

      </form>

      {step === 2 &&
        <BackIcon onClick={() => setStep(1)} className='back-icon' />}

      {
          step === 3 &&
            <ConfirmedBooking data={formData} />
        }
    </>

  )
}

export default BookingForm
