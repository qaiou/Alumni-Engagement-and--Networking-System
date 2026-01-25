import { useNavigate } from "react-router-dom"
import "./AdminDashboard.css"

export function StudentSidebar(){
    const navigate = useNavigate()
    const handleDashboard = () => navigate("/studentdashboard")
    const handleJobListing = () => navigate("/joblisting")
    const handleEvent = () => navigate("/event")
    const handleSearchAlumni = () => navigate("/searchalumni")
    const handleNotification = () => navigate("/notificationuser")
    const handleMentorship = () => navigate("/requestmentorship")
    const handlesubmitFeedback = () => navigate("/submitfeedback")
    const handleLogout = () => {navigate("/")}

    return(
        <aside className="sidebar">
            <h2> </h2>
            <nav>
            <a href="#" onClick={handleDashboard}>Dashboard</a>
            <a href="#" onClick={handleJobListing}>Job Listing</a>
            <a href="#" onClick={handleEvent}>Event</a>
            <a href="#" onClick={handleSearchAlumni}>Search Alumni</a>
            <a href="#" onClick={handleNotification}>Notification</a>
            <a href="#" onClick={handleMentorship}>Mentorship Pairing</a>
            <a href="#" onClick={handlesubmitFeedback}>Submit Feedback</a>
            <a href="#" onClick={handleLogout}>Logout</a>
            </nav>
        </aside>
    )
}



//job lsiting
//event
//search
//request mentorship
//notification
//Submit feedback
