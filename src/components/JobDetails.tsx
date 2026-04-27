import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobList } = useContext(JobContext);
  const { id } = useParams();
  const job = jobList.find((job) => job.job_id === id);

  return (
    <div className="flex text-sans items-center justify-center mt-10 text-gray-500">
      {job !== undefined ? (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <img
              src={
                job.employer_logo ??
                "https://placehold.co/56x56/gray/white?text=?"
              }
              className="rounded-lg"
              alt="Employer Logo"
            />
            <h2 className="text-3xl">{job.employer_name}</h2>
            <p className="text-xl">{job.job_title}</p>
            <p className="text-xl">
              {job.job_max_salary && job.job_min_salary
                ? `U$${job.job_min_salary} - U$${job.job_max_salary}`
                : "Not informed"}
            </p>
            {job.job_posted_at_datetime_utc ? (
              <p className="text-xl=">
                `Posted at:{" "}
                {job.job_posted_at_datetime_utc.toString().split("T")[0]}`
              </p>
            ) : null}
            <div className="flex justify-center gap-20">
              <p className="text-xl">
                {job.job_is_remote ? "Remote" : "On-Site"}
              </p>
              {job.job_is_remote ? null : (
                <p className="text-xl">
                  {job.job_city} - {job.job_country}
                </p>
              )}
            </div>
          </div>
          {job.job_description !== "" ? (
            <div
              className="flex w-9/10 prose"
              dangerouslySetInnerHTML={{ __html: job.job_description }}></div>
          ) : null}
          <a
            className="bg-sky-700 p-3 rounded-lg text-gray-300 mb-10 mt-10 shadow cursor-pointer hover:bg-sky-500 hover:text-white hover:shadow-sky-700 hover:shadow-lg hover:translate-y-1 transition duration-500"
            target="_blank"
            href={job.job_apply_link}>
            Apply!
          </a>
        </div>
      ) : (
        "Essa vaga não existe"
      )}
    </div>
  );
};

export default JobDetails;
