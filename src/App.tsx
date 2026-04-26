// Importando meu custom hook
import { useJobList } from "./hook/useJobs";

// Importando componentes
import Header from "./components/Header";

function App() {
  const { jobList, searchInput, isLoading, hasError, setSearchInput } =
    useJobList();
  return (
    <>
      <div className="mainAppContainer">
        <Header setSearchInput={setSearchInput} />
        <div className="font-sans flex items-center justify-center p-3 text-xl">
          <span>
            {searchInput !== ""
              ? `${jobList.length} resultado para ${searchInput}.`
              : `${jobList.length} resultados para developer.`}
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
