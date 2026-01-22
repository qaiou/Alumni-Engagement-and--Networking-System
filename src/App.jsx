import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Loginn'
import { DashBoard } from './pages/AdminDashboard'
import { UserManagement } from './pages/UserAccountManage'

export default function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Usermanagement" element={<UserManagement />} />
      </Routes>
    </Router> 
  )
}

