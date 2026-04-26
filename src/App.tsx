// Importando meu custom hook
import { useJobList } from "./hook/useJobs";

// Importando componentes
import Header from "./components/Header";
import JobList from "./components/JobList";

function App() {
  const { jobList, searchInput, isLoading, hasError, setSearchInput } =
    useJobList();
  return (
    <>
      <div className="flex flex-col w-1/1 items-center justify-center">
        <Header setSearchInput={setSearchInput} />
        <div className="font-sans flex items-center justify-center p-3 text-xl">
          <span>
            {searchInput !== ""
              ? `${jobList.length} results for ${searchInput}.`
              : `${jobList.length} results for developer.`}
          </span>
        </div>
        <JobList jobList={jobList} />
      </div>
    </>
  );
}

export default App;
