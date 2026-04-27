// Importando o tipo de Job
import type { Job } from "../types";

// Importando hook de contexto e contexto
import { useContext } from "react";
import { JobContext } from "../context/JobContext";

// Importando componente que vai mostrar cada vaga em um card
import JobCard from "./JobCard";

// Tipando a jobList
interface JobListType {
  jobList: Job[];
}

const JobList = ({ jobList }: JobListType) => {
  const { isLoading, hasError } = useContext(JobContext);
  if (hasError) return <p>Tivemos um erro ao acessar a lista de vagas.</p>;
  if (isLoading) return <p>Aguarde, estamos trazendo as vagas.</p>;
  return (
    <main className="flex flex-col items-center mb-5">
      {jobList.map((job: Job) => (
        <JobCard key={job.job_id} job={job} />
      ))}
    </main>
  );
};

export default JobList;
