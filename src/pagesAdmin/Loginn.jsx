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
    const handleSubmit = (event) => {
        event.preventDefault()

        if (formData.role === "Admin") navigate("/admindashboard")
        else if (formData.role === "Student") navigate("/studentdashboard")
        else alert("Please select a role")
    }

    const handleForgotPassword = () => {
        alert("Password reset link sent to your email (demo).")
    }

    const handleRegister = () => {
        navigate("/register")
    }

    return (
        
        <div className="form-wrapper">
            <h1 style={{ textAlign: "center" , padding: "20px"}}>ALUMNI ENGAGEMENT AND NETWORKING SYSTEM</h1>
            <form onSubmit={handleSubmit} className="form-box">
                <h2 style={{ textAlign: "center" }}>LOGIN</h2>
                <label>Role</label>
                <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                >
                <option value="">Select your account role</option>
                <option value="Alumni">Alumni</option>
                <option value="Student">Student</option>
                <option value="CSO">Career Services Officer(CSO)</option>
                <option value="Admin">Admin</option>
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

                {/* New links */}
                <div className="login-links">
                <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="link-btn"
                >
                    Forgot Password?
                </button>

                <button
                    type="button"
                    onClick={handleRegister}
                    className="link-btn"
                >
                    Register
                </button>
                </div>
            </form>
        </div>

    )
} 
