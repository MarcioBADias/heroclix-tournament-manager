import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login/index'
import { Dashboard } from '../pages/Dashboard'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export { App }
