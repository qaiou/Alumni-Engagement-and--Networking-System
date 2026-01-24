import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"

export  function DashBoard() {

  const navigate = useNavigate()
  const handleDashboard = () => navigate("/dashboard")
  const handleUserMan = () => navigate("/usermanagement")
  const handleJobListing = () => navigate("/joblisting")
  const handleMentorship = () => navigate("/mentorshippairing")
  const handleEvents = () => navigate("/events")
  const handleLogout = () => {navigate("/")}

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2> </h2>
        <nav>
          <a href="#" onClick={handleDashboard}>Dashboard</a>
          <a href="#" onClick={handleUserMan}>User Account Management</a>
          <a href="#" onClick={handleJobListing}>Job Listing</a>
          <a href="#" onClick={handleMentorship}>Mentorship Pairing</a>
          <a href="#" onClick={handleEvents}>Events</a>
          <a href="#" onClick={handleLogout}>Logout</a>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <h2 className="system">Alumni Engagement and Networking System</h2>
          <input type="image" src="/user2.png"></input>
        </header>

        <section className="content">
          <div className="card">
            <h2>Post 1</h2>
            lalalllalalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            <img src="/gambo.png" alt="first class graduates yay congrats" className="image"></img>
            <br/>first class graduates yay congrats
          </div>
          <div className="card"><h2>Post 2</h2></div>
          <div className="card"><h2>Post 3</h2></div>
          
        </section>
      </main> 
    </div>
  );
}

