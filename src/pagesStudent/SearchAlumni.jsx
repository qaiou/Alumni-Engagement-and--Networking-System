import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { StudentSidebar } from "../StudentSidebar"

export function SearchAlumni() {
  const [search, setSearch] = useState("");
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [requested, setRequested] = useState(false);

  const alumniList = [
    {
      id: 1,
      name: "Dr. Farhan Ali",
      email: "farhan@technova.com",
      graduationYear: "2024",
      career: "Software Engineering",
      skills: "React, Node.js, AI",
      interests: "Web Development, AI, Mentorship",
      city: "Cyberjaya",
      state: "Pahang",
      postalCode: "63000",
    },
    {
      id: 2,
      name: "Aisyah Rahman",
      email: "aisyah@branding.co",
      graduationYear: "2022",
      career: "Marketing",
      skills: "Digital Marketing, Branding, SEO",
      interests: "Marketing Strategies, Social Media",
      city: "Kuala Lumpur",
      state: "Wilayah Persekutuan Kuala Lumpur",
      postalCode: "50000",
      
    },
    {
      id: 3,
      name: "Joelle Tan Su Ai",
      email: "elle99@mechworks.com",
      graduationYear: "2022",
      career: "Manufacturing",
      skills: "CAD, SolidWorks, Production Design",
      bio: "Mechanical engineer specializing in industrial systems.",
      interests: "Mechanical Design, Manufacturing Processes",
      city: "Semenyih",
      state: "Selangor",
      postalCode: "43500",
    }
  ];

  const filteredAlumni = alumniList.filter(alumni =>
    alumni.name.toLowerCase().includes(search.toLowerCase()) ||
    alumni.field.toLowerCase().includes(search.toLowerCase()) ||
    alumni.industry.toLowerCase().includes(search.toLowerCase()) ||
    alumni.skills.toLowerCase().includes(search.toLowerCase())
  );

  const handleRequest = () => {
    setRequested(true);
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
                <h2>Search Alumni Profile</h2>
                {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by name, field, industry, or skills..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedAlumni(null);
              setRequested(false);
            }}
            style={{ width: "300px", padding: "8px", marginBottom: "15px" }}
          />

          {/* Results List */}
          {!selectedAlumni && (
            <>
              {filteredAlumni.length === 0 ? (
                <p>No Alumni Found</p>
              ) : (
                filteredAlumni.map(alumni => (
                  <div
                    key={alumni.id}
                    className="card"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelectedAlumni(alumni);
                      setRequested(false);
                    }}
                  >
                    <h3>{alumni.name}</h3>
                    <p>{alumni.industry}</p>
                    <p><strong>Skills:</strong> {alumni.skills}</p>
                  </div>
                ))
              )}
            </>
          )}

          {/* Alumni Profile View */}
          {selectedAlumni && (
            <div className="card" style={{ maxWidth: "600px", backgroundColor: "#e5edf4" }}>
              <h2>{selectedAlumni.name}</h2>
              <p><strong>Career:</strong> {selectedAlumni.career}</p>
              <p><strong>Interest:</strong> {selectedAlumni.interests}</p>
              <p><strong>Skills:</strong> {selectedAlumni.skills}</p>
              <p><strong>Email:</strong> {selectedAlumni.email}</p>
              <p><strong>Location:</strong> {selectedAlumni.city}, {selectedAlumni.state}, {selectedAlumni.postalCode}</p>
              <p><strong>Graduation Year:</strong> {selectedAlumni.graduationYear}</p>
              <p><strong>Career:</strong> {selectedAlumni.career}</p>

              <br />

              {!requested ? (
                <button className="btn" onClick={handleRequest}>
                  Request Connection
                </button>
              ) : (
                <p style={{ color: "green" }}>Connection request sent!</p>
              )}

              <br />
              <button onClick={() => setSelectedAlumni(null)} className="btn" style={{marginTop:"15px"}}>← Back to Results</button>
            </div>
          )}
            </section>
        </main> 
    </div>
  )
}