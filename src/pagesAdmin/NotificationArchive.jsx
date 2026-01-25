import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { Sidebar } from "../Sidebar"

export  function Notification() {

    const [notifications, setNotifications] = useState([
        {
        id: 1,
        title: "Mentorship Pairing Approved",
        message: "You have been paired with Dr. Farhan. Please check your dashboard.",
        type: "Mentorship",
        time: "2026-01-24 10:15 AM",
        read: false
        },
        {
        id: 2,
        title: "Event Reminder",
        message: "Don't forget: Alumni Career Talk starts at 3 PM today.",
        type: "Event",
        time: "2026-01-23 09:00 AM",
        read: true
        },
        {
        id: 3,
        title: "Job Opportunity",
        message: "A new internship at TechNova is now available.",
        type: "System",
        time: "2026-01-22 02:30 PM",
        read: false
        }
    ]);

    const markAsRead = (id) => {
        setNotifications(
        notifications.map(n =>
            n.id === id ? { ...n, read: true } : n
        )
        );
    };

    return(
        <div className="layout">
        <Sidebar/>
        <main className="main">
            <header className="topbar">
            <h2 className="system">Alumni Engagement and Networking System</h2>
            <input type="image" src="/user2.png"></input>
            </header>

            <section className="content">
                <h2>Notification Archive</h2>
                <div className="card">
                    {notifications.length === 0 && <p>No notifications yet</p>}

                    {notifications.map(notif => (
                        <div
                        key={notif.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "12px",
                            marginBottom: "10px",
                            background: "#f9f9f9"
                        }}
                        >
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <strong>{notif.title}</strong>
                            <span style={{ fontSize: "12px", color: "#666" }}>{notif.time}</span>
                        </div>

                        <p>{notif.message}</p>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span
                            style={{
                                fontSize: "12px",
                                padding: "2px 6px",
                                borderRadius: "4px",
                                background:
                                notif.type === "Mentorship" ? "#d1e7dd" :
                                notif.type === "Event" ? "#cff4fc" :
                                "#e2e3e5"
                            }}
                            >
                            {notif.type}
                            </span>
                        </div>
                        </div>
                    ))}
                </div>
            </section>
        </main> 
        </div>
    )
}