import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { StudentSidebar } from "../StudentSidebar"

export function NotificationUser() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Mentorship Pairing Update",
      message: "You have been paired with Alumni mentor Dr. Farhan. Please accept or decline the pairing.",
      type: "Mentorship",
      time: "2026-01-24 10:30 AM",
      read: false
    },
    {
      id: 2,
      title: "New Job Posted",
      message: "Frontend Developer Intern at TechNova Solutions is now available.",
      type: "Job",
      time: "2026-01-23 09:00 AM",
      read: true
    },
    {
      id: 3,
      title: "System Message",
      message: "Your profile has been updated successfully.",
      type: "System",
      time: "2026-01-22 03:45 PM",
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
  
  return (
    <div className="layout">
        <StudentSidebar />
        <main className="main">
            <header className="topbar">
            <h2 className="system">Alumni Engagement and Networking System</h2>
            <input type="image" src="/user2.png"></input>
            </header>
            
            <section className="content">
                <h2>Notifications</h2>
                {notifications.map(notif => (
                  <div
                    key={notif.id}
                    className="card"
                    style={{ background: notif.read ? "#e5effd" : "#f9f9f9" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <strong>{notif.title}</strong>
                      <span style={{ fontSize: "12px", color: "#666" }}>{notif.time}</span>
                    </div>

                    <p>{notif.message}</p>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "12px", opacity: 0.7 }}>{notif.type}</span>
        
                      {!notif.read && (
                        <button className="btn" onClick={() => markAsRead(notif.id)}>
                          Mark as Read
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </section>
        </main> 
    </div>
  )
}