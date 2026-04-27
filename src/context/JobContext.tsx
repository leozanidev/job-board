// Importando função para criação de contexto
import { createContext } from "react";

// Importando o tipo Job para usar na interface do tipo do contexto
import type { Job } from "../types";

// Hooke para pegar a lista de vagas
import { useJobList } from "../hook/useJobs";

// Criando um tipo para JobContext
interface JobContextType {
  jobList: Job[];
  isLoading: boolean;
  hasError: boolean;
}

interface JobProviderType {
  children: React.ReactNode;
}

export const JobContext = createContext<JobContextType>({
  jobList: [],
  isLoading: false,
  hasError: false,
});
export const JobProvider = ({ children }: JobProviderType) => {
  const { jobList, isLoading, hasError } = useJobList();
  return (
    <JobContext.Provider
      value={{ jobList, isLoading, hasError }}
      children={children}
    />
  );
};
