// Importando hooks nativos do react
import { useState, useEffect } from "react";
// Importando função que busca a lista de trabalhos
import { getJobs } from "../utils/api";
// Importando tipagem da lista de trabalhos
import type { Job } from "../types";

export function useJobList() {
  // States do hook
  const [jobList, setJobList] = useState<Job[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  //   useEffects do hook
  // Trazer a lista na primeira renderização, por isso array de dependências vazio
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const jobs = await getJobs({ searchInput, category });
        setJobList(jobs);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [searchInput, category]);

  // Retorno
  return {
    jobList,
    isLoading,
    hasError,
    setCategory,
    setSearchInput,
  };
}
