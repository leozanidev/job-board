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
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  //   useEffects do hook
  // Trazer a lista sempre que alterarem searchInput
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchJobs = async () => {
        try {
          setIsLoading(true);
          const jobs = await getJobs({ searchInput });
          setJobList(jobs);
        } catch (error) {
          setHasError(true);
        } finally {
          setIsLoading(false);
        }
      };

      fetchJobs();
    }, 500);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // Retorno
  return {
    jobList,
    searchInput,
    isLoading,
    hasError,
    setSearchInput,
  };
}
