import React, { useEffect, useState } from 'react'
import ProfilCard from '../component/profileCard'
import ProfileInformation from '../component/pROFILEiNFORMATION.JSX'
import API_URL from '../apiConfig'
import axiosInstance from '../axiosInstance'
import { generatePDF } from '../component/generatePdf'

export default function DashBoard() {
    const [matchedjobs, setmatchedjobs] = useState([])
    const [count, setcount] = useState(0)
    const [userJobDiscription, setuserJobDiscription] = useState([])
    const [jobSpecificCVs, setJobSpecificCVs] = useState([]);
    useEffect(() => {
        getMatchedJobs()
    }, [])
    const getMatchedJobs = async () => {
        const response = await axiosInstance.get(`${API_URL}getMatched-jobs/`);
        console.log({ "res": response?.data?.matched_jobs });
        setcount(response?.data?.matched_jobs?.reduce((acc, obj) => acc + obj.matched_jobs.length, 0))
        const jobs = response?.data?.matched_jobs?.flatMap(item => item.matched_jobs);
        setmatchedjobs(jobs);

    }
    console.log({ matchedjobs });


    const applyjobs = async () => {
        try {
            const response = await axiosInstance.get(`${API_URL}getUserJobDisc/`);
            const descriptions = response?.data?.descriptions;

            setuserJobDiscription(descriptions);


            // Wait for state update using useEffect
        } catch (error) {
            console.error("Error fetching user job descriptions:", error);
        }
    };

    useEffect(() => {
        if (userJobDiscription.length > 0 && matchedjobs.length > 0) {
            const jobSpecificCVs = matchedjobs?.map(job => ({
                ...userJobDiscription[0],
                skills: job.skills,
                job_id: job.jobId
            }));

            console.log(jobSpecificCVs);
            setJobSpecificCVs(jobSpecificCVs);

        }
    }, [userJobDiscription, matchedjobs]);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (count === jobSpecificCVs.length) {
                alert("Count matches jobSpecificCVs length!");
                jobSpecificCVs?.map((item)=>{
                    generatePDF(item)
                })
            }
        }, 5000); // 5 seconds delay

        return () => clearTimeout(timer); // Cleanup to prevent memory leaks
    }, [count, jobSpecificCVs]); // Runs when count or jobSpecificCVs changes


    return (
        <>
            <ProfilCard count={count} applyjobs={applyjobs} />
            {/* <ProfileInformation /> */}
            {/* Recent Sales Start */}
            <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Matched  Jobs With Your Skills</h6>
                        <button type="button" onClick={applyjobs} className="btn btn-success rounded-pill m-2" style={{ marginTop: '30px' }}>
                            Apply
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col">
                                        <input className="form-check-input" type="checkbox" />
                                    </th>
                                    <th scope="col">Job-Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">Skills</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matchedjobs?.map((job, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input className="form-check-input" type="checkbox" />
                                        </td>
                                        <td>
                                            <strong>{job.jobId ? job.jobId : "---"}</strong>
                                        </td>
                                        <td>
                                            <strong>{job.title ? job.title : "---"}</strong>
                                        </td>
                                        <td>
                                            <strong>{job.company ? job.company : "---"}</strong>
                                        </td>
                                        <td>
                                            <strong>{job.skills ? job.skills : "---"}</strong>
                                        </td>
                                        <td>
                                            <strong>{job.description ? job.description : "---"}</strong>
                                        </td>
                                        <td>
                                            <a className="btn btn-sm btn-primary" href="#">
                                                Detail
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            {/* Recent Sales End */}

        </>

    )
}
