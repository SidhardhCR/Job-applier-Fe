import React from 'react'
import { useAuth } from '../contexts/AuthContext';

export default function DashBoard() {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();  // Remove auth status
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to the dashboard!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
