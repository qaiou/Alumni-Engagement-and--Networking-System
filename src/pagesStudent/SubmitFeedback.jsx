import "../AdminDashboard.css"
import { useState } from "react"
import { StudentSidebar } from "../StudentSidebar"

export function SubmitFeedback() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="layout">
        <StudentSidebar />
        <main className="main">
            <header className="topbar">
            <h2 className="system">Alumni Engagement and Networking System</h2>
            <input type="image" src="/user2.png"></input>
            </header>

            <section className="content" style={{display:"grid", placeItems:"center", margin:"50px"}}>
                <h2 style={{marginBottom:"20px"}}>Submit Feedback</h2>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="form-box" >
                    <label>Your Feedback</label>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Share your mentorship experience..."
                      required
                    />

                    <button type="submit">Submit Feedback</button>
                  </form>
                ) : (
                  <div className="card">
                    <h3>Thank you!</h3>
                    <p>Your feedback has been submitted and is pending admin review.</p>
                    <p><strong>Your feedback:</strong></p>
                    <p>{feedback}</p>
                  </div>
                )}
            </section>
        </main> 
    </div>
  )
}