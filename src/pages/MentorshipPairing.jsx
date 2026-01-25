import "../AdminDashboard.css"
import { useEffect, useState } from "react";
import { Sidebar } from "../Sidebar"

export  function MentorshipPairing() {

    const [students, setStudents] = useState([
        {
        id: 1,
        name: "Liyin",
        skills: ["Python", "Data Science"],
        interests: ["AI", "Machine Learning"]
        },
        {
        id: 2,
        name: "Hafiz",
        skills: ["React", "Web Dev"],
        interests: ["Frontend", "UI/UX"]
        },
        {
        id: 3,
        name: "Sara",
        skills: ["Cybersecurity", "Networks"],
        interests: ["Ethical Hacking"]
        },
        {
        id: 4,
        name: "Jax",
        skills: ["Java", "Spring Boot"],
        interests: ["Backend Development", "Microservices"]
        }
    ]);

    const [alumni, setAlumni] = useState([
        {
        id: 101,
        name: "Dr. Farhan",
        skills: ["AI", "ML", "Research"],
        interests: ["Teaching", "Mentorship"]
        },
        {
        id: 102,
        name: "Ms. Nadia",
        skills: ["React", "UX Design"],
        interests: ["Startups", "Mentoring"]
        },
        {
        id: 103,
        name: "Mr. Adam",
        skills: ["Security", "DevOps"],
        interests: ["Cybersecurity", "Teaching"]
        },
        {
        id: 104,
        name: "Ms. Lina",
        skills: ["Java", "Cloud"],
        interests: ["Backend Development", "Mentorship"]
        }
    ]);

    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedAlumni, setSelectedAlumni] = useState(null);
    const [pairings, setPairings] = useState([]);

    const approvePairing = () => {
        if (!selectedStudent || !selectedAlumni) return alert("Select one student and one alumni first");

        setPairings([
        ...pairings,
        {
            id: Date.now(),
            student: selectedStudent,
            alumni: selectedAlumni,
            status: "Awaiting Acceptance"
        }
        ]);

        setStudents(students.filter(s => s.id !== selectedStudent.id));
        setAlumni(alumni.filter(a => a.id !== selectedAlumni.id));
        setSelectedStudent(null);
        setSelectedAlumni(null);
    };

    return(
        <div className="layout">
        <Sidebar/>

        <main className="main">
            <header className="topbar">
            <h2 className="system">Alumni Engagement and Networking System</h2>
            <input type="image" src="/user2.png"></input>
            </header>

            <section className="content">
                <h2>Mentorship Pairing</h2>
                <div className="mentorship-container">

                    {/*-----------Students---------------- */}
                    <section>
                    <h3>Student Requests</h3>
                    <div>   
                        {students.map(student => (
                            <label key={student.id} style={{ display: "block", marginBottom: "10px" }}>
                            <input
                                style = {{ marginTop: "15px" }}
                                type="radio"
                                name="student"
                                checked={selectedStudent?.id === student.id}
                                onChange={() => setSelectedStudent(student)}
                            />
                            {" "}
                            <strong >{student.name}</strong>
                            <br/>Skills: {student.skills.join(", ")}
                            <br/>Interests: {student.interests.join(", ")}
                            </label>
                        ))}
                    </div>
                    
                    </section>

                    {/*-----------Pairing review---------------- */}
                    <section>
                        <h3>Pairing Review</h3>
                        <div>   
                            {selectedStudent && selectedAlumni ? (
                                <>
                                <h4>Student</h4>
                                <p><strong>{selectedStudent.name}</strong></p>
                                <p>Skills: {selectedStudent.skills.join(", ")}</p>
                                <p>Interests: {selectedStudent.interests.join(", ")}</p>

                                <h4>Alumni</h4>
                                <p><strong>{selectedAlumni.name}</strong></p>
                                <p>Skills: {selectedAlumni.skills.join(", ")}</p>
                                <p>Interests: {selectedAlumni.interests.join(", ")}</p>

                                <button onClick={approvePairing} className="deleteBtn">Approve Pairing</button>
                                </>
                            ) : (
                                <p>Select one student and one alumni to review pairing</p>
                            )}
                        </div>
                        
                    </section>

                    {/*-----------Alumni---------------- */}
                    <section>
                    <h3>Alumni Requests</h3>
                    <div>
                        {alumni.map(alum => (
                            <label key={alum.id} style={{ display: "block", marginBottom: "10px" }}>
                            <input
                                style = {{ marginTop: "15px" }}
                                type="radio"
                                name="alumni"
                                checked={selectedAlumni?.id === alum.id}
                                onChange={() => setSelectedAlumni(alum)}
                            />
                            {" "}
                            <strong>{alum.name}</strong>
                            <br/>Skills: {alum.skills.join(", ")}
                            <br/>Interests: {alum.interests.join(", ")}
                            </label>
                        ))}
                    </div>
                    </section>

                    {/*-----------Active pairing---------------- */}
                    <div style={{ marginTop: "30px" }}>
                        <h3>Active Pairings</h3>
                        {pairings.length === 0 && <p>No pairings yet</p>}
                        {pairings.map(pair => (
                        <div key={pair.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                            {pair.student.name} ↔ {pair.alumni.name}
                            <p>Status: {pair.status}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </main> 
        </div>
    )
}
