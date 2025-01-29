import * as React from 'react';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import axiosInstance from "../axiosInstance";  // Import the axios instance

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        try {
            const response = await axiosInstance.post('login/', { email, password }); // The login endpoint
            if (response.data) {
                login(); // Call login function from AuthContext
                navigate("/dashboard"); // Redirect to dashboard after login
            }
        } catch (error) {
            setError("Invalid credentials");  // Set error message if API fails
            console.error("Login error:", error.response ? error.response.data : error);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f4f6f8",
            }}
        >
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: "100%",
                    maxWidth: "400px",
                    padding: 2,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: "#fff",
                }}
            >
                <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
                    Login
                </Typography>

                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    {/* Use the single formData state for both fields */}
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="email"
                        value={formData.email}
                        onChange={handleChange} // Use handleChange for both fields
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="password"
                        value={formData.password}
                        onChange={handleChange} // Use handleChange for both fields
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            marginTop: 2,
                            backgroundColor: "#3f51b5",
                            "&:hover": { backgroundColor: "#303f9f" },
                        }}
                    >
                        Login
                    </Button>
                </form>
            </Grid>
        </Box>
    );
};
