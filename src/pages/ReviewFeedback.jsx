import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { Sidebar } from "./Sidebar"

export  function ReviewFeedback() {

    return(
        <div className="layout">
        <Sidebar />
        <main className="main">
            <header className="topbar">
            <h2 className="system">Alumni Engagement and Networking System</h2>
            <input type="image" src="/user2.png"></input>
            </header>
            <div className="manageAcc">
            <h2>Review Feedback</h2>
            </div>
        </main> 
        </div>
    )
}
