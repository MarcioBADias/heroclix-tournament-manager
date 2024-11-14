import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login/index'
import { Dashboard } from '../pages/Dashboard'
import { Home } from '../pages/Home'

const App = () => {
  return (
    <>
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export { App }
