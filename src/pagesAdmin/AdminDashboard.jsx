import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { Sidebar } from "../Sidebar"

export  function DashBoard() {
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

  const approvePost = (id) => {
    setPosts(posts.map(p =>
      p.id === id
        ? { ...p, status: "Published", log: [...p.log, "Approved by Admin"] }
        : p
    ))
  }

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  const createPost = () => {
    const newPost = {
      id: Date.now(),
      title: "New Admin Post",
      description: "This is a new post created by Admin.",
      image: "/office.png",
      status: "Published",
      author: "Admin",
      log: ["Created by Admin", "Published"]
    }
    setPosts([newPost, ...posts])
  }

  return (
    <div className="layout">
      <Sidebar />

      <main className="main">
        <header className="topbar">
          <h2 className="system">Alumni Engagement and Networking System</h2>
          <input type="image" src="/user2.png"></input>
        </header>

        <h2 style={{padding:"20px 0px 0px 35px",}}>Admin Dashboard</h2>
        <div>        
          <button className="add-btn" onClick={createPost}>+ Add New Content</button>
        </div>
        
        <section className="content" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {posts.map(post => (
            <div className="card" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <img src={post.image} alt={post.title} className="image" />

              <p style={{marginTop: "20px"}}><strong>Status:</strong> {post.status}</p>

                {post.status === "Pending Approval" && (
                  <button onClick={() => approvePost(post.id)} className="btn">Approve</button>
                )}
                <button className="btn">Edit</button>
                <button onClick={() => deletePost(post.id)} className="btn">Remove</button>
            </div>
          ))}

          {/*}
          <div className="card">
            <h2></h2>
            lalalllalalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            <img src="/gambo.png" alt="first class graduates yay congrats" className="image"></img>
            <br/>first class graduates yay congrats
          </div>
          <div className="card"><h2>Post 2</h2></div>
          <div className="card"><h2>Post 3</h2></div>
          */}
        </section>
      </main> 
    </div>
  );
}

