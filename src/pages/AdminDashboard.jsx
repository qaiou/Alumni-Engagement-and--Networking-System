import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"

export  function DashBoard() {

  return (
    <div className="layout">
      <aside className="sidebar">
        <nav>
          <a href="#">User</a>
          <a href="#">Userns</a>
          <a href="#">Reports</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <h2>Alumni bla3 system</h2>
          <button>Logout</button>
        </header>

        <section className="content">
          <div className="card">
            <h2>Post 1</h2>
            lalalllalalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div className="card"><h2>Post 2</h2></div>
          <div className="card"><h2>Post 3</h2></div>
          
        </section>
      </main>
    </div>
  );
}

