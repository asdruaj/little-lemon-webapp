import './styles/main.css'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Route, Routes, useLocation } from 'react-router'
import Booking from './pages/Booking'
import Menu from './pages/Menu'
import Homepage from './pages/Homepage'
import { useEffect } from 'react'

function App () {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/menu' element={<Menu />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
