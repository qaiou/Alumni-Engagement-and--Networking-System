import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Loginn'
import { DashBoard } from './pages/AdminDashboard'

export default function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router> 
  )
}

