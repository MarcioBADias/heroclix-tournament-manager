import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login/index'

const App = () => {
  return (
    <>
      <Login />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export { App }
