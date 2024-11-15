import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login/index'
import { Dashboard } from '../pages/Dashboard'
import { Home } from '../pages/Home'
import { Register } from '../pages/Register'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export { App }
