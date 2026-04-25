// Importando hooks nativos do react
import { useState, useEffect } from "react";
// Importando função que busca a lista de trabalhos
import { getJobs, getCategories } from "../utils/api";
// Importando tipagem da lista de trabalhos
import type { Job, Category } from "../types";

export function useJobList() {
  // States do hook
  const [jobList, setJobList] = useState<Job[]>([]);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  //   useEffects do hook
  // Trazer a lista sempre que alterarem searchInput e category
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

  // Array de dependências vazio para rodar apenas uma vez
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const categories = await getCategories();
        setCategoryList(categories);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Retorno
  return {
    categoryList,
    jobList,
    isLoading,
    hasError,
    setCategory,
    setSearchInput,
  };
}
