import type { Job } from "../types";

interface JobCardProps {
  job: Job;
}
const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="flex flex-col w-4/5 rounded-xl p-5 mt-10 bg-sky-500 text-gray-300 transition duration-500 shadow-md hoveer:translate-y-1 hover:shadow-2xl hover:shadow-sky-700 cursor-pointer hover:bg-sky-600 hover:text-gray-100">
      <div className="flex justify-center items-center mb-5 gap-5">
        <img
          src={
            job.employer_logo ?? "https://placehold.co/56x56/gray/white?text=?"
          }
          alt="logo da empresa"
          className="rounded-xl"
        />
        <p className="text-xl">{job.employer_name}</p>
      </div>
      <div className="flex items-center">
        <h3 className="text-xl">{job.job_title}</h3>
      </div>
      <div className="flex justify-between text-lg mt-5">
        <h4>{job.job_is_remote ? "Remoto" : "Presencial"}</h4>
        <h4>
          {job.job_min_salary && job.job_max_salary
            ? `U$${job.job_min_salary} - U$${job.job_max_salary}`
            : "Not informed"}
        </h4>
      </div>
    </div>
  );
};

export default JobCard;
