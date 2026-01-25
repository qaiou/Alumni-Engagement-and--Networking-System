import { useNavigate } from "react-router-dom";
import "../AdminDashboard.css";
import { useState } from "react";
import { Sidebar } from "../Sidebar";

export function UserManagement() {
  const [formData, setFormData] = useState({
    newName: "",
    newPassw: "",
    newEmail: "",
    newRole: "",
  });

  const [users, setUsers] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: users.length + 1,
      name: formData.newName,
      password: formData.newPassw,
      email: formData.newEmail,
      role: formData.newRole,

    };

    setUsers([...users, newUser]);
    setFormData({ newName: "", newEmail: "", newPassw: "" , newRole: ""});
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <header className="topbar">
          <h2 className="system">Alumni Engagement and Networking System</h2>
          <input type="image" src="/user2.png" />
        </header>

        <section className="content">
          <h2>User Account Management</h2>
          <div className="card">
            <form className="user-form" onSubmit={handleSubmit}>
              <input type="hidden" name="userId" />
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="newName"
                  required
                  value={formData.newName}
                  onChange={handleInputChange}
                />

                <label>Password:</label>
                <input
                  type="tel"
                  name="newPassw"
                  required
                  value={formData.newPassw}
                  onChange={handleInputChange}
                />

                <label>Email:</label>
                <input
                  type="email"
                  name="newEmail"
                  required
                  value={formData.newEmail}
                  onChange={handleInputChange}
                />

                <label>Role</label>
                <select
                name="newRole"
                value={formData.newRole}
                onChange={handleInputChange}
                >
                <option value="">Select your account role</option>
                <option value="Alumni">Alumni</option>
                <option value="Student">Student</option>
                <option value="Career Services Officer(CSO)">Career Services Officer(CSO)</option>
                <option value="Admin">Admin</option>
                </select>
              </div>
              <button type="submit" className="createBtn">Add User</button>
            </form>

            <table className="user-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Password</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.password}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => handleDelete(u.id)}
                      >
                        Delete Account
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
