import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const BookingForm = () => {
  const validationSchema = Yup.object({
    date: Yup.date()
      .required('Please choose a date'),
    time: Yup.string()
      .required('Please select an option'),
    guests: Yup.number()
      .min('1 guest minimum')
      .max('10 guests max')
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
      date: new Date(),
      time: '',
      guests: 1,
      ocassion: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    },
    onSubmit: values => {
      // eslint-disable-next-line no-undef
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema
  })

  return (
    <form onSubmit={formik.handleSubmit}>

      <div>
        <label htmlFor='date'>Choose date </label>
        <input type='date' name='date' id='date' {...formik.getFieldProps('date')} />

        {formik.touched.date && formik.errors.date &&
          <span>{formik.errors.date}</span>}
      </div>

      <div>
        <label htmlFor='time'>Choose time</label>
        <select name='time' id='time' {...formik.getFieldProps('time')}>
          <option value='17:00'>17:00</option>
          <option value='18:00'>18:00</option>
          <option value='19:00'>19:00</option>
          <option value='20:00'>20:00</option>
          <option value='21:00'>21:00</option>
          <option value='22:00'>22:00</option>
        </select>
        {formik.touched.time && formik.errors.time &&
          <span>{formik.errors.time}</span>}
      </div>

      <div>
        <label htmlFor='guests'>Number of guests</label>
        <input type='number' name='guests' id='guests' min='1' max='2' {...formik.getFieldProps('guests')} />
        {formik.touched.guests && formik.errors.guests &&
          <span>{formik.errors.guests}</span>}
      </div>

      <div>
        <label htmlFor='ocassion'>Ocassion</label>
        <select name='ocassion' id='ocassion' {...formik.getFieldProps('ocassion')}>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
          <option value='Engagement'>Engagement</option>
          <option value='Others'>Others</option>
        </select>

        {formik.touched.ocassion && formik.errors.ocassion &&
          <span>{formik.errors.ocassion}</span>}
      </div>

      <button>Next</button>

      <div>
        <label htmlFor='firstName'>First name </label>
        <input name='firstName' id='firstName' {...formik.getFieldProps('firstName')} />

        {formik.touched.firstName && formik.errors.firstName &&
          <span>{formik.errors.firstName}</span>}
      </div>

      <div>
        <label htmlFor='lastName'>First name </label>
        <input name='lastName' id='lastName' {...formik.getFieldProps('lastName')} />

        {formik.touched.lastName && formik.errors.lastName &&
          <span>{formik.errors.lastName}</span>}
      </div>

      <div>
        <label htmlFor='email'>First name </label>
        <input name='email' id='email' {...formik.getFieldProps('email')} />

        {formik.touched.email && formik.errors.email &&
          <span>{formik.errors.lastName}</span>}
      </div>

      <div>
        <label htmlFor='phone'>First name </label>
        <input name='phone' id='phone' {...formik.getFieldProps('phone')} />

        {formik.touched.phone && formik.errors.phone &&
          <span>{formik.errors.phone}</span>}
      </div>

      <button type='submit'>Reserve!</button>

    </form>
  )
}

export default BookingForm
