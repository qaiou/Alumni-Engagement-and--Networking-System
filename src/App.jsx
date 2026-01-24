import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Loginn'
import { DashBoard } from './pages/AdminDashboard'
import { UserManagement } from './pages/UserAccountManage'
import { Notification } from './pages/NotificationManagement'
import { MentorshipPairing } from './pages/MentorshipPairing'    
import { ReviewFeedback } from './pages/ReviewFeedback' 

export default function App() {
  

  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/mentorshippairing" element={<MentorshipPairing />} />
        <Route path="/reviewfeedback" element={<ReviewFeedback />} />
      </Routes>
    </Router> 
  )
}

