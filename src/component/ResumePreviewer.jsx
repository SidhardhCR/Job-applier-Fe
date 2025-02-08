import React from 'react'

export default function ResumePreviewer({formData,resumeRef}) {
    return (
            
                <div className="rounded h-100 p-4" ref={resumeRef} style={{ backgroundColor: '#fff', color: "#000" }}>
                    <h4 className="text-center" style={{ color: "#000" }}>{formData.fullName || "Your Name"}</h4>
                    <p><strong>Position:</strong> {formData.position || "Your Job Role"}</p>
                    <p><strong>Email:</strong> {formData.email || "Your Email"}</p>
                    <p><strong>Mobile:</strong> {formData.mobile || "Your Mobile"}</p>
                    <p><strong>Location:</strong> {formData.location || "Your Location"}</p>
                    <p><strong>LinkedIn:</strong> {formData.linkedIn || "Your LinkedIn"}</p>
                    <p><strong>GitHub:</strong> {formData.github || "Your GitHub"}</p>
                    <p><strong>Profile:</strong> {formData.profile || "Your Profile"}</p>
                    <p><strong>Experience:</strong></p>
                    <ul>
                        {formData.experience.split(",").map((exp, index) => (
                            <li key={index}>{exp.trim()}</li>
                        ))}
                    </ul>
                    <p><strong>Skills:</strong> {formData.skills || "Your Skills"}</p>
                    <p><strong>Certificate:</strong> {formData.certificate || "Your Certification"}</p>
                    <p><strong>Hobbies:</strong> {formData.hobbies || "Your Hobbies"}</p>
                </div>
    )
}
