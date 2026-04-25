// Importando meu custom hook
import { useJobList } from "./hook/useJobs";

// Importando componentes
import Header from "./components/Header";

function App() {
  const { jobList, isLoading, hasError, setCategory, setSearchInput } =
    useJobList();
  return (
    <>
      <div className="mainAppContainer">
        <Header setSearchInput={setSearchInput} setCategory={setCategory} />
      </div>
    </>
  );
}

export default App;
