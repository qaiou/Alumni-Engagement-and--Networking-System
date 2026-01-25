import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './pagesAdmin/Loginn'
import { DashBoard } from './pagesAdmin/AdminDashboard'
import { UserManagement } from './pagesAdmin/UserAccountManage'
import { Notification } from './pagesAdmin/NotificationArchive'
import { MentorshipPairing } from './pagesAdmin/MentorshipPairing'    
import { ReviewFeedback } from './pagesAdmin/ReviewFeedback' 

import { StudentDashboard } from './pagesStudent/StudentDashboard'
import { JobListing } from './pagesStudent/JobListing'
import { Event } from './pagesStudent/Event'
import { SearchAlumni } from './pagesStudent/SearchAlumni'
import { RequestMentorship } from './pagesStudent/RequestMentorship'
import { NotificationUser } from './pagesStudent/NotificationUser'
import { SubmitFeedback } from './pagesStudent/SubmitFeedback'

export default function App() {
  
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/admindashboard" element={<DashBoard />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/mentorshippairing" element={<MentorshipPairing />} />
        <Route path="/reviewfeedback" element={<ReviewFeedback />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/joblisting" element={<JobListing />} />
        <Route path="/event" element={<Event />} />
        <Route path="/searchalumni" element={<SearchAlumni />} />
        <Route path="/requestmentorship" element={<RequestMentorship />} />
        <Route path="/notificationuser" element={<NotificationUser />} />
        <Route path="/submitfeedback" element={<SubmitFeedback />} />
      </Routes>
    </Router> 
  )
}

//dasboard
//job lsiting
//event
//search
//request mentorship
//notification
//Submit feedback
//logout