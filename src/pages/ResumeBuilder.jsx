import React, { useState, useRef } from "react";
import { generatePDF } from "../component/generatePdf";
import ResumePreviewer from "../component/ResumePreviewer";
import ResumeForm from "../component/ResumeForm";
import axiosInstance from "../axiosInstance";
import API_URL from "../apiConfig";

export default function ResumeBuilder() {
    const handleSubmit = async (e) => {
        try {
            formData["user_id"] = localStorage.getItem("user_id");
            const response = await axiosInstance.post(API_URL + 'resume-submit/', formData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }

    const resumeRef = useRef(null);
    const [formData, setFormData] = useState({
        fullName: "John Doe",
        position: "Web Developer",
        email: "test@123.com",
        mobile: "78945612312",
        location: "India",
        linkedIn: "sid@linked.com",
        github: "test234-github.com",
        profile: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus itaque porro officia quo voluptates quibusdam omnis ducimus fuga quis? Laboriosam obcaecati veniam debitis. Corrupti, consequuntur veritatis quam fuga blanditiis quisquam?",
        experience: "Gristone Technology - Application Developer, Vensure HCM - Application Developer",
        skills: "JavaScript, React",
        certificate: "SQL-BootCamp",
        hobbies: "Watching Movies, Playing Football, Listening to Music"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <ResumeForm formData={formData} handleChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <ResumePreviewer formData={formData} resumeRef={resumeRef} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 text-center">
                    <button onClick={() => { generatePDF(formData) }} className="btn btn-primary btn-lg w-100">
                        Download Resume as PDF
                    </button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12 text-center">
                    <button onClick={handleSubmit} className="btn btn-primary btn-lg w-100">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};


