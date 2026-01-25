import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { Sidebar } from "../Sidebar"

export  function ReviewFeedback() {
    const [feedbacks, setFeedbacks] = useState([
        {
        id: 1,
        message: "The mentorship matching feature works really well!",
        date: "2026-01-22",
        status: "Pending"
        },
        {
        id: 2,
        message: "The dashboard sometimes loads slowly.",
        date: "2026-01-23",
        status: "Pending"
        },
        {
        id: 3,
        message: "Buy cheap followers at spamlink.com",
        date: "2026-01-23",
        status: "Pending"
        }
    ]);

    const [sentToCSO, setSentToCSO] = useState([]);

    const deleteFeedback = (id) => {
        setFeedbacks(feedbacks.filter(fb => fb.id !== id));
    };

    const sendToCSO = (feedback) => {
        setSentToCSO([...sentToCSO, { ...feedback, status: "Sent to CSO" }]);
        setFeedbacks(feedbacks.filter(fb => fb.id !== feedback.id));
    };

    return(
        <div className="layout">
        <Sidebar />
        <main className="main">
            <header className="topbar">
            <h2 className="system">Alumni Engagement and Networking System</h2>
            <input type="image" src="/user2.png"></input>
            </header>


            <section className="content">
                <h2>Review Feedback</h2>
                <div style={{  gridTemplateColumns: "2fr 1fr"}} className="container">
                    {/* Incoming Feedback */}
                    <section>
                        <h3>Incoming Feedback</h3>
                        {feedbacks.length === 0 && <p>No pending feedback</p>}

                        {feedbacks.map(fb => (
                            <div
                            key={fb.id}
                            style={{
                                border: "1px solid #ccc",
                                backgroundColor: "#fafafab2",
                                padding: "12px",
                                marginBottom: "10px"
                            }}
                            >
                            <strong>Feedback #{fb.id}</strong>
                            <p style={{ fontSize: "12px", color: "#666", textAlign: "right" }}>{fb.date}</p>
                            <p style={{ paddingBottom: "10px" }}>{fb.message}</p>

                            <button
                            onClick={() => sendToCSO(fb)}
                            style={{ marginRight: "10px" }}
                            >
                            Send to CSO
                            </button>
                            <button onClick={() => deleteFeedback(fb.id)}>
                            Delete
                            </button>
                            
                            </div>
                        ))}
                    </section>

                    {/* Sent to CSO */}
                    <section>
                    <h3>Sent to CSO</h3>
                    {sentToCSO.length === 0 && <p>No feedback sent yet</p>}

                    {sentToCSO.map(fb => (
                        <div
                        key={fb.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginBottom: "10px",
                            background: "#f5f5f5"
                        }}
                        >
                        <strong>Feedback #{fb.id}</strong>
                        <p>{fb.message}</p>
                        <small>Status: {fb.status}</small>
                        </div>
                    ))}
                    </section>
                </div>
            </section>
        </main> 
        </div>
    )
}
