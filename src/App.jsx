import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Loginn'
import { DashBoard } from './pages/AdminDashboard'
import { UserManagement } from './pages/UserAccountManage'
import { JobListing } from './pages/JobListing'
import { MentorshipPairing } from './pages/MentorshipPairing'    
import { Events } from './pages/Events' 

export default function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Usermanagement" element={<UserManagement />} />
        <Route path="/Joblisting" element={<JobListing />} />
        <Route path="/Mentorshippairing" element={<MentorshipPairing />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
    </Router> 
  )
}

