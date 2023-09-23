import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
     useEffect(() =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(jobs => )
        }
     }, [])
    return (
        <div>
            
        </div>
    );
};

export default AppliedJobs;