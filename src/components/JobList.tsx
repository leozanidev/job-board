// Importando o tipo de Job
import type { Job } from "../types";

// Tipando a jobList
interface JobListType {
  jobList: Job[];
}

// Importando componente que vai mostrar cada vaga em um card
import JobCard from "./JobCard";

const JobList = ({ jobList }: JobListType) => {
  return (
    <main className="flex flex-col items-center">
      {jobList.map((job: Job) => (
        <JobCard key={job.job_id} job={job} />
      ))}
    </main>
  );
};

export default JobList;
