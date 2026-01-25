import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { StudentSidebar } from "../StudentSidebar"

export function JobListing() {

  const [jobs] = useState([
    {
      id: 1,
      title: "Professional Dancer",
      company: "JYP Entertainment",
      companyImage: "/jyp.jpg",
      location: "South Korea",
      description: "Choreograph dance for tranee and artist. Must be able to speak korean fluently and have experience in teaching for dance competition",
      field: "Entertainment",
      salary: "RM5000/month",
      status: "Open"
    },
    {
      id: 2,
      title: "Researcher, Web Unit",
      company: "TELEKOM RESEARCH & DEVELOPMENT SDN BHD",
      companyImage: "/tm.jpg",
      location: "Cyberjaya",
      description: "Holds a Bachelor’s degree in Computer Science or similar qualification with minimum 1 year (minimum 3 years for senior) of relevant working experience in software development.",
      field: "IT",
      salary: "RM3000/month",
      status: "Open"
    },
    {
      id: 3,
      title: "Software Engineer Graduate",
      company: "InnovateX",
      companyImage: "/x.jpg",
      location: "Remote",
      description: "Join our engineering team to develop scalable backend systems and APIs.",
      field: "IT",
      salary: "RM3500/month",
      status: "Open"
    }
  ]);

  return (
    <div className="layout">
        <StudentSidebar />
        <main className="main">
            <header className="topbar">
            <h2 className="system">Alumni Engagement and Networking System</h2>
            <input type="image" src="/user2.png"></input>
            </header>
            
            <section className="content" >
                <h2 style={{paddingLeft:"15px"}}>Job Listing</h2>
                <div className="card" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px"}} >
                  {jobs.map(job => (
                    <div
                      key={job.id}
                      style={{
                        border: "1px solid #ccc",
                        padding: "15px",
                        marginBottom: "12px",
                        borderRadius: "6px",
                        background: "#fff"
                      }}
                    >
                      <h3>{job.title}</h3>
                      <img src={job.companyImage} alt={job.company} style={{width: "100px", height: "100px"}} />
                      <p><strong>{job.company}</strong> — {job.location}</p>
                      <p>{job.description}</p>
                      <p><strong>Field:</strong> {job.field}</p>
                      <p><strong>Salary:</strong> {job.salary}</p>
                      <p><strong>Status:</strong> {job.status}</p>

                      <button className="btn">Apply</button>
                    </div>
                  ))}
                </div>
            </section>
        </main> 
    </div>
  )
}