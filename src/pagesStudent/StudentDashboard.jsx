import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { StudentSidebar } from "../StudentSidebar"

export  function StudentDashboard() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "New Job Opportunities for Alumni",
      description: "Exciting career openings for alumni in top tech companies!",
      image: "/work.jpg",
      status: "Pending Approval",
      author: "CSO",
      log: ["Draft created", "Submitted for approval"]
    },
    {
      id: 2,
      title: "Alumni Achievement",
      description: "Congratulations to our first-class graduates!",
      image: "/gambo1.jpg",
      status: "Published",
      author: "Admin",
      log: ["Content created", "Published"]
    }
  ])

  return (
    <div className="layout">
      <StudentSidebar />

      <main className="main">
        <header className="topbar">
          <h2 className="system">Alumni Engagement and Networking System</h2>
          <input type="image" src="/user2.png"></input>
        </header>

        <h2 style={{padding:"20px 0px 0px 35px",}}>Student Dashboard</h2>
        
        <section className="content" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {posts.map(post => (
            <div className="card" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <img src={post.image} alt={post.title} className="image" />
            </div>
          ))}

        </section>
      </main> 
    </div>
  );
}

