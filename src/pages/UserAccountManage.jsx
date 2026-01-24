import { useNavigate } from "react-router-dom"
import "../AdminDashboard.css"
import { useState } from "react"
import { Sidebar } from "./Sidebar"

export function UserManagement(){

    const [formData, setFormData] = useState({
    newName: "",
    newEmail: "",
    newPhone:"",
  	})

    const handleInputChange = (event) => {
        const { name, value } = event.target
        
        setFormData((previousKeyValueState) => ({
        ...previousKeyValueState,
        [name]: value,
        }))
    }

    return(
        <div className="layout">
        <Sidebar />
        <main className="main">
            <header className="topbar">
            <h2 className="system">Alumni Engagement and Networking System</h2>
            <input type="image" src="/user2.png"></input>
            </header>

            <section className="content">
                <h2>User Account Management</h2>
                <div className="card">
                    <form id="userForm" className="user-form">
                        <input type="hidden" name="userId" />
                        <div className="form-group">

                            <label>Name:</label>
                            <input type="text" name="name" required value={formData.newName} onChange={handleInputChange}/>

                            <label>Email:</label>
                            <input type="email" name="email" required value={formData.newEmail} onChange={handleInputChange}/>

                            <label>Phone:</label>
                            <input type="tel" name="phone" required value={formData.newPhone} onChange={handleInputChange}/>
                            
                        </div>
                        <button type="submit" className="createBtn">Add User</button>
                    </form>
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody id="userList"></tbody>
                    </table>
                </div>
            </section>
        </main> 
        </div>
    )
}