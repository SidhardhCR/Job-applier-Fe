// src/components/Layout.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';


export default function Layout() {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();  // Remove auth status
    };
    return (
        <div className="container-fluid position-relative d-flex p-0">

            <div className="sidebar pe-4 pb-3">
                <nav className="navbar bg-secondary navbar-dark">
                    <a href="index.html" className="navbar-brand mx-4 mb-3">
                        <h3 className="text-primary">
                            <i className="fa fa-user-edit me-2" />
                            JobFinder
                        </h3>
                    </a>
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <img
                                className="rounded-circle"
                                src="img/user.jpg"
                                alt=""
                                style={{ width: 40, height: 40 }}
                            />
                            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Jhon Doe</h6>
                            <span>Admin</span>
                        </div>
                    </div>
                    <div className="navbar-nav w-100">
                        <Link to={"/dashboard"} className="nav-item nav-link">
                            <i className="fa fa-tachometer-alt me-2" />
                            Dashboard
                        </Link>

                        <Link to={"/resumeBuilder"} className="nav-item nav-link">
                            <i className="fa fa-file me-2" />
                            Resume Builder
                        </Link>

                        <Link to={"/myProfile"} className="nav-item nav-link">
                            <i className="fa fa-user me-2" />
                            Profile
                        </Link>



                    </div>
                </nav>
            </div>
            {/* Sidebar End */}
            {/* Content Start */}
            <div className="content">
                {/* Navbar Start */}
                <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                        <h2 className="text-primary mb-0">
                            <i className="fa fa-user-edit" />
                        </h2>
                    </a>
                    <a href="#" className="sidebar-toggler flex-shrink-0">
                        <i className="fa fa-bars" />
                    </a>

                    <div className="navbar-nav align-items-center ms-auto">
                        <div className="nav-item dropdown">

                            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle"
                                            src="img/user.jpg"
                                            alt=""
                                            style={{ width: 40, height: 40 }}
                                        />
                                        <div className="ms-2">
                                            <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle"
                                            src="img/user.jpg"
                                            alt=""
                                            style={{ width: 40, height: 40 }}
                                        />
                                        <div className="ms-2">
                                            <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle"
                                            src="img/user.jpg"
                                            alt=""
                                            style={{ width: 40, height: 40 }}
                                        />
                                        <div className="ms-2">
                                            <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item text-center">
                                    See all message
                                </a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                <i className="fa fa-bell me-lg-2" />
                                <span className="d-none d-lg-inline-flex">Notificatin</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">Profile updated</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">New user added</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">Password changed</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item text-center">
                                    See all notifications
                                </a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                <img
                                    className="rounded-circle me-lg-2"
                                    src="img/user.jpg"
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                <span className="d-none d-lg-inline-flex">John Doe</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">
                                    My Profile
                                </a>
                                <a href="#" className="dropdown-item">
                                    Settings
                                </a>
                                <a onClick={handleLogout} className="dropdown-item">
                                    Log Out
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar End */}
                {/* Blank Start */}
                <div className="container-fluid pt-4 px-4">
                    <Outlet />

                </div>
                {/* Blank End */}
                {/* Footer Start */}
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-secondary rounded-top p-4">
                        <div className="row">
                            <div className="col-12 col-sm-6 text-center text-sm-start">
                                © <a href="#">JobFinder</a>, All Right Reserved.
                            </div>

                        </div>
                    </div>
                </div>
                {/* Footer End */}
            </div>
            {/* Content End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
            </a>
        </div>
    );
}
