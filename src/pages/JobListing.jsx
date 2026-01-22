import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"

export  function JobListing() {

    const navigate = useNavigate()
    const handleDashboard = () => navigate("/dashboard")
    const handleUserMan = () => navigate("/usermanagement")
    const handleJobListing = () => navigate("/joblisting")
    const handleMentorship = () => navigate("/mentorshippairing")
    const handleEvents = () => navigate("/events")

    return(
        <div className="layout">
        <aside className="sidebar">
            <h2> </h2>
            <nav>
            <a href="#" onClick={handleDashboard}>Dashboard</a>
            <a href="#" onClick={handleUserMan}>User Account Management</a>
            <a href="#" onClick={handleJobListing}>Job Listing</a>
            <a href="#" onClick={handleMentorship}>Mentorship Pairing</a>
            <a href="#" onClick={handleEvents}>Events</a>
            <a href="#">Logout</a>
            </nav>
        </aside>

        <main className="main">
            <header className="topbar">
            <h2 className="system">Alumni Engagement and Networking System</h2>
            <input type="image" src="/user2.png"></input>
            </header>
            <div className="manageAcc">
            <h2>Job Listing</h2>
            </div>
        </main> 
        </div>
    )
}