import React from 'react'

const Button = ({ children }) => {
  const buttonStyle = {
    backgroundColor: 'var(--primary-color-2)',
    border: '0px',
    fontFamily: "'Karla', serif",
    fontWeight: 700,
    fontSize: '1rem',
    borderRadius: '16px',
    padding: '8px 16px'
  }
  return (
    <button style={buttonStyle}>{children}</button>
  )
}

export default Button
