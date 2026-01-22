import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../Login.css"

export function Login() {

    const [formData, setFormData] = useState({
    role:"",
    username: "",
    password: "",
  	})
    

    const handleInputChange = (event) => {
        const { name, value } = event.target
        
        setFormData((previousKeyValueState) => ({
        ...previousKeyValueState,
        [name]: value,
        }))
    }

    const navigate = useNavigate()
    const handleSubmit = () => navigate("/dashboard")

    return (
        
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="form-box">

                <label>Role</label>
                <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                >
                <option value="">Select your account role</option>
                <option value="alumni">Alumni</option>
                <option value="Student">Student</option>
                <option value="cso">Career Services Officer(CSO)</option>
                <option value="admin">Admin</option>
                </select>

                <label>Username</label>
                <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange} //run the handleinputchange function and do it works
                />

                <label>Password</label>
                <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                />

                <button type="submit" onClick={handleSubmit}>Log in</button>
            </form>
        </div>

    )
} 
