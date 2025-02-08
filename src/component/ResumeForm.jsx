import React from 'react'

export default function ResumeForm({formData, handleChange}) {
    return (
        <div className="bg-secondary rounded h-100 p-4">
            <h6 className="mb-4">Resume Form</h6>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />
                <label>Full Name</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    name="position"
                    className="form-control"
                    placeholder="Position"
                    value={formData.position}
                    onChange={handleChange}
                />
                <label>Position</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label>Email</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                />
                <label>Mobile</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="text"
                    name="location"
                    className="form-control"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                />
                <label>Location</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    name="linked-in"
                    className="form-control"
                    placeholder="Linked-in"
                    value={formData.linkedIn}
                    onChange={handleChange}
                />
                <label>Liked-In</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    name="gitHub"
                    className="form-control"
                    placeholder="GitHub-Url"
                    value={formData.github}
                    onChange={handleChange}
                />
                <label>Github-Url</label>
            </div>
            <div className="form-floating mb-3">

                <textarea
                    style={{ minHeight: "150px", width: "100%", paddingTop: "22px" }}
                    name="Profile"
                    className="form-control"
                    placeholder="Profile"
                    value={formData.profile}
                    onChange={handleChange}
                />


                <label>Profile</label>
            </div>
            <div className="form-floating mb-3">
                <textarea
                    style={{ minHeight: "100px", width: "100%", paddingTop: "22px" }}
                    type="text"
                    name="pexperience"
                    className="form-control"
                    placeholder="Professional Experience"
                    value={formData.experience}
                    onChange={handleChange}
                />
                <label>Professional Experience</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="text"
                    name="skills"
                    className="form-control"
                    placeholder="Skills"
                    value={formData.skills}
                    onChange={handleChange}
                />
                <label>Skills</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="text"
                    name="certifiactes"
                    className="form-control"
                    placeholder="Certificates"
                    value={formData.certificate}
                    onChange={handleChange}
                />
                <label>Certificates</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    name="hobbies"
                    className="form-control"
                    placeholder="Hobbies"
                    value={formData.hobbies}
                    onChange={handleChange}
                />
                <label>Hobbies</label>
            </div>

        </div>
    )
}
