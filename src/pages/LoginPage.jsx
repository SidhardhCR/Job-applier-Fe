import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../axiosInstance";  // Import the axios instance
import { triggerToast } from '../component/Toaster';


export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    console.log(formData);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        try {
            const response = await axiosInstance.post('login/', { email, password }); // The login endpoint
            if (response.data) {

                login(); // Call login function from AuthContext
                localStorage.setItem('user_id', response.data.user_id),// Save the token in local storage
                    navigate("/dashboard"); // Redirect to dashboard after login
            }
        } catch (error) {
            triggerToast("Invalid credentials!", "error");
            console.error("Login error:", error.response ? error.response.data : error);
        }
    };

    return (
        <div className="container-fluid position-relative d-flex p-0">
            {/* Spinner Start */}
            {/* <div
                id="spinner"
                className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
            >
                <div
                    className="spinner-border text-primary"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                >
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}
            {/* Spinner End */}
            {/* Sign In Start */}
            <div className="container-fluid">
                <div
                    className="row h-100 align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                        <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <a href="index.html" className="">
                                    <h3 className="text-primary">
                                        <i className="fa fa-user-edit me-2" />
                                        JobFinder
                                    </h3>
                                </a>
                                <h3>Sign In</h3>
                            </div>
                            <form onSubmit={handleSubmit} >
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            Check me out
                                        </label>
                                    </div>
                                    <a href="">Forgot Password</a>
                                </div>
                                <button type="submit" disabled={!formData.email || !formData.password} className="btn btn-primary py-3 w-100 mb-4">
                                    Sign In
                                </button>
                            </form>
                            <p className="text-center mb-0">
                                Don't have an Account? <Link to={"/SignUp"} >Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sign In End */}
        </div>

    )
}
