// Importando função para criação de contexto
import { createContext } from "react";

// Importando o tipo Job para usar na interface do tipo do contexto
import type { Job } from "../types";

// Hooke para pegar a lista de vagas
import { useJobList } from "../hook/useJobs";

// Criando um tipo para JobContext
interface JobContextType {
  jobList: Job[];
}

interface JobProviderType {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextType>({ jobList: [] });
export const JobProvider = ({ children }: JobProviderType) => {
  const { jobList } = useJobList();
  return <JobContext.Provider value={{ jobList }} children={children} />;
};
