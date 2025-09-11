import './styles/main.css'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router'
import Booking from './pages/Booking'
import Menu from './pages/Menu'
import Homepage from './pages/Homepage'

function App () {
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
