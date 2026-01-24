import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { Sidebar } from "./Sidebar"

export  function DashBoard() {
  
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <header className="topbar">
          <h2 className="system">Alumni Engagement and Networking System</h2>
          <input type="image" src="/user2.png"></input>
        </header>

        <section className="content">
          <div className="card">
            <h2>Post 1</h2>
            lalalllalalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br/>
            <img src="/gambo.png" alt="first class graduates yay congrats" className="image"></img>
            <br/>first class graduates yay congrats
          </div>
          <div className="card"><h2>Post 2</h2></div>
          <div className="card"><h2>Post 3</h2></div>
          
        </section>
      </main> 
    </div>
  );
}

