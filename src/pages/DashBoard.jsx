import React, { useEffect, useState } from 'react';
import ProfileCard from '../component/ProfileCard';
import ProfileInformation from '../component/ProfileInformation.jsx';
import API_URL from '../apiConfig';
import axiosInstance from '../axiosInstance';
import { generatePDF } from '../component/generatePdf';

export default function DashBoard() {
    const [matchedjobs, setMatchedJobs] = useState([]);
    const [count, setCount] = useState(0);
    const [userJobDescription, setUserJobDescription] = useState([]);
    const [jobSpecificCVs, setJobSpecificCVs] = useState([]);
    const [pdfResponses, setPdfResponses] = useState([]);

    useEffect(() => {
        getMatchedJobs();
    }, []);

    const getMatchedJobs = async () => {
        try {
            const response = await axiosInstance.get(`${API_URL}getMatched-jobs/`);
            const jobs = response?.data?.matched_jobs?.flatMap(item => item.matched_jobs) || [];
            setMatchedJobs(jobs);
            setCount(jobs.length);
        } catch (error) {
            console.error("Error fetching matched jobs:", error);
        }
    };

    const handleDownloadResume = async (index) => {
        try {
            const fileId = pdfResponses[index]?.mongo_file_id;
            if (!fileId) {
                console.error("No file ID found for resume download.");
                return;
            }

            const response = await axiosInstance.get(`${API_URL}download/${fileId}`, { responseType: 'blob' });
            
            if (response.status === 200) {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `resume_${index}.pdf`);
                document.body.appendChild(link);
                link.click();
                link.remove();
            } else {
                console.error("Error downloading resume: Unexpected response status", response.status);
            }
        } catch (error) {
            console.error("Error downloading resume:", error);
        }
    };

    const applyJobs = async () => {
        try {
            const response = await axiosInstance.get(`${API_URL}getUserJobDisc/`);
            setUserJobDescription(response?.data?.descriptions || []);
        } catch (error) {
            console.error("Error fetching user job descriptions:", error);
        }
    };

    useEffect(() => {
        if (userJobDescription.length > 0 && matchedjobs.length > 0) {
            const jobSpecificCVs = matchedjobs.map(job => ({
                ...userJobDescription[0],
                skills: job.skills,
                job_id: job.jobId
            }));
            setJobSpecificCVs(jobSpecificCVs);
        }
    }, [userJobDescription, matchedjobs]);

    const handlePdfResponse = (response) => {
        setPdfResponses(prev => [...prev, response]);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count === jobSpecificCVs.length) {
                alert("Count matches jobSpecificCVs length!");
                jobSpecificCVs.forEach((item) => {
                    generatePDF(item, handlePdfResponse);
                });
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [count, jobSpecificCVs]);

    return (
        <>
            <ProfileCard count={count} applyJobs={applyJobs} />
            
            <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Matched Jobs With Your Skills</h6>
                        <button type="button" onClick={applyJobs} className="btn btn-success rounded-pill m-2">
                            Apply
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                                    <th scope="col">Job-Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">Skills</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matchedjobs.map((job, index) => (
                                    <tr key={index}>
                                        <td><input className="form-check-input" type="checkbox" /></td>
                                        <td><strong>{job.jobId || "---"}</strong></td>
                                        <td><strong>{job.title || "---"}</strong></td>
                                        <td><strong>{job.company || "---"}</strong></td>
                                        <td><strong>{job.skills || "---"}</strong></td>
                                        <td><strong>{job.description || "---"}</strong></td>
                                        <td>
                                            <button className="btn btn-sm btn-primary" onClick={() => handleDownloadResume(index)}>
                                                Resume
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
