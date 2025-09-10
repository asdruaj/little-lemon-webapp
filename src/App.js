import './styles/main.css'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './pages/Main'
import { Route, Routes } from 'react-router'
import Booking from './pages/Booking'
import Menu from './pages/Menu'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/menu' element={<Menu />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
