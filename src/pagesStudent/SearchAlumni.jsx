import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { StudentSidebar } from "../StudentSidebar"

export function SearchAlumni() {
  return (
    <div className="layout">
        <StudentSidebar />
        <main className="main">
            <header className="topbar">
            <h2 className="system">Alumni Engagement and Networking System</h2>
            <input type="image" src="/user2.png"></input>
            </header>
            
            <section className="content">
                <h2>Search Alumni Profile</h2>
                <div className="card">
                    
                </div>
            </section>
        </main> 
    </div>
  )
}