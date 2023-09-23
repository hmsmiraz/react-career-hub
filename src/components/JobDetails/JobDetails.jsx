import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utilities/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id == idInt);

  const handleApplyJob = () => {
    saveJobApplication(id);
    toast("Successfully Applied");
  }

  return (
    <div>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="border md:col-span-3">
            <h2 className="text-4xl">Details Coming Here</h2>
            <h3><span className="font-bold text-base">Job Title:</span> {job.job_title}</h3>
            <h4><span className="font-bold text-base">Company:</span> {job.company_name} </h4>
            <p><span className="font-bold text-base">Job Description:</span> {job.job_description}</p>
            <p><span className="font-bold text-base">Job Responsibility:</span> {job.job_responsibility}</p>
            <p><span className="font-bold text-base">Educational requirements: </span>{job.educational_requirements}</p>
            <p><span className="font-bold text-base">Experience:</span> {job.experiences}</p>
          </div>
          <div className="border">
            <h2 className="text-2xl">Side things</h2>
            <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
          </div>
        </div>
        <ToastContainer />
    </div>
  );
};

export default JobDetails;
