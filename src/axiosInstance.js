// src/axiosInstance.js

import axios from 'axios';
import API_URL from './apiConfig';  // Import the base URL from apiConfig.js

const axiosInstance = axios.create({
    baseURL: API_URL,  // Set the base URL for all requests
    timeout: 5000, // Timeout after 5 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
