import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"

export function Sidebar(){
    const navigate = useNavigate()
    const handleDashboard = () => navigate("/dashboard")
    const handleUserMan = () => navigate("/usermanagement")
    const handleNotification = () => navigate("/notification")
    const handleMentorship = () => navigate("/mentorshippairing")
    const handleReviewFeedback = () => navigate("/reviewfeedback")
    const handleLogout = () => {navigate("/")}

    return(
        <aside className="sidebar">
            <h2> </h2>
            <nav>
            <a href="#" onClick={handleDashboard}>Dashboard</a>
            <a href="#" onClick={handleUserMan}>User Account Management</a>
            <a href="#" onClick={handleNotification}>Notification Management</a>
            <a href="#" onClick={handleMentorship}>Mentorship Pairing</a>
            <a href="#" onClick={handleReviewFeedback}>Review Feedback</a>
            <a href="#" onClick={handleLogout}>Logout</a>
            </nav>
        </aside>
    )
}