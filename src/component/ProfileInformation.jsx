import React from 'react'
// import "./card.css"

export default function ProfileInformation() {
    return (

        <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-2">
                    <div className="col-sm-12 col-md-6 col-xl-12">
                        <div className="h-100 bg-secondary rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="mb-0">Profile Info</h6>
                                <a href="">Edit</a>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <img
                                    className="rounded-circle flex-shrink-0"
                                    src="img/user.jpg"
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        {/* <small>15 minutes ago</small> */}
                                    </div>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui repellat iure deserunt magni est dolorum labore harum, architecto veniam esse vero voluptatem ea saepe alias et atque adipisci a!</span>
                                </div>
                            </div>
                            {/* Form Goes Here  */}
                            <div className="row">
                                <div className="col-sm-12 col-xl-4">
                                    <div className="bg-secondary rounded h-100 p-4">
                                        <h6 className="mb-4">Personal Details</h6>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingName"
                                                placeholder="Full Name"
                                            />
                                            <label htmlFor="floatingName">Full Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingMobile"
                                                placeholder="Mobile"
                                            />
                                            <label htmlFor="floatingMobile">Mobile</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                className="form-control form-control-sm"
                                                id="floatingEmail"
                                                placeholder="Email"
                                            />
                                            <label htmlFor="floatingEmail">Email</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingLocation"
                                                placeholder="Location"
                                            />
                                            <label htmlFor="floatingLocation">Location</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingSkills"
                                                placeholder="Skills"
                                            />
                                            <label htmlFor="floatingSkills">Skills</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-xl-4">
                                    <div className="bg-secondary rounded h-100 p-4">
                                        <h6 className="mb-4">Personal Details</h6>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingName"
                                                placeholder="Full Name"
                                            />
                                            <label htmlFor="floatingName">Full Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingMobile"
                                                placeholder="Mobile"
                                            />
                                            <label htmlFor="floatingMobile">Mobile</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                className="form-control form-control-sm"
                                                id="floatingEmail"
                                                placeholder="Email"
                                            />
                                            <label htmlFor="floatingEmail">Email</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingLocation"
                                                placeholder="Location"
                                            />
                                            <label htmlFor="floatingLocation">Location</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingSkills"
                                                placeholder="Skills"
                                            />
                                            <label htmlFor="floatingSkills">Skills</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-xl-4">
                                    <div className="bg-secondary rounded h-100 p-4">
                                        <h6 className="mb-4">Personal Details</h6>

                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingName2"
                                                placeholder="Full Name"
                                            />
                                            <label htmlFor="floatingName2">Full Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingMobile2"
                                                placeholder="Mobile"
                                            />
                                            <label htmlFor="floatingMobile2">Mobile</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                className="form-control form-control-sm"
                                                id="floatingEmail2"
                                                placeholder="Email"
                                            />
                                            <label htmlFor="floatingEmail2">Email</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingLocation2"
                                                placeholder="Location"
                                            />
                                            <label htmlFor="floatingLocation2">Location</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="floatingSkills2"
                                                placeholder="Skills"
                                            />
                                            <label htmlFor="floatingSkills2">Skills</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ends here */}
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary btn-sm">
                                    Submit
                                </button>
                            </div>


                        </div>
                    </div>


                </div>
            </div>



        </>
    )
}
