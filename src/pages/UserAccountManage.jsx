import { useNavigate } from "react-router-dom"
import "../UserAccountManage.css"
import { useState } from "react"

export function UserManagement(){



    return(
        <div className="layout">
        <aside className="sidebar">
            <h2> </h2>
            <nav>
            <a href="#">User Account Management</a>
            <a href="#">Job Listings</a>
            <a href="#">Mentorship Pairing</a>
            <a href="#">Events</a>
            <a href="#">Logout</a>
            </nav>
        </aside>

        <main className="main">
            <header className="topbar">
            <h2 className="system">Alumni Engagement and Networking System</h2>
            <input type="image" src="/user2.png"></input>
            </header>
            <div className="manageAcc">
            <h2>User Account Management</h2>
            </div>
        </main> 
        </div>
    )
}