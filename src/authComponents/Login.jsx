import { useState } from "react";
import USER from "../mockData/user";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
    const {login} = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false
    })
    const [error, setError] = useState('');

    const handlechange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("All fields are required");
            return;
        }

        if ((formData.email === USER.email) && (formData.password === USER.password)) {
            setError("");
            login(formData)
            navigate("/dashboard")
            // alert("Login Successfull");
            return
        } else {
            setError("Invalid creditantials")
        }
    }
    return (
        <div className="container">
            <div className=" d-flex justify-content-center w-100 align-items-center mt-auto vh-100" >
                <div className="card w-50 p-2">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handlechange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={handlechange} value={formData.password} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" name="remember" className="form-check-input" id="exampleCheck1" onChange={handlechange} checked={formData.remember} />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        {error && (
                            <div className="alert alert-danger">{error}</div>
                        )}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;