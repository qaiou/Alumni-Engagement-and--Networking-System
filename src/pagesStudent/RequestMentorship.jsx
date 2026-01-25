import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { StudentSidebar } from "../StudentSidebar"

export function RequestMentorship() {

    const [formData, setFormData] = useState({
        skills: "",
        interests: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

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
                <h2 style={{marginBottom:"20px"}}>Mentorship Pairing</h2>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="form-box">
                    <label>Skills</label>
                    <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        placeholder="e.g. Java, React, Data Analysis"
                        required
                    />

                    <label>Interests</label>
                    <textarea
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        placeholder="e.g. Web development, AI, Cybersecurity"
                        required
                    />

                    <button type="submit">Request Mentor</button>
                    </form>
                ) : (

                <div className="card" >
                    <h3>Request Submitted</h3>
                    <p><strong>Skills:</strong> {formData.skills}</p>
                    <p><strong>Interests:</strong> {formData.interests}</p>
                    <p>Status: Pending CSO review</p>
                </div>
                )}
            </section>
        </main> 
        </div>
    )
}