// Importando meu custom hook
import { useJobList } from "./hook/useJobs";

// Importando a rotas para SPA
import { Route, Routes } from "react-router-dom";

// Importando componentes
import Header from "./components/Header";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import Footer from "./components/Footer";

function App() {
  const { jobList, searchInput, isLoading, hasError, setSearchInput } =
    useJobList();
  return (
    <>
      <div className="flex flex-col w-1/1 items-center justify-center">
        <Header
          setSearchInput={setSearchInput}
          jobCount={jobList.length}
          searchInput={searchInput}
        />
        <Routes>
          <Route path="/" element={<JobList jobList={jobList} />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
