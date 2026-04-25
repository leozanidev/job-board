// Importando meu custom hook
import { useJobList } from "./hook/useJobs";

// Importando componentes
import Header from "./components/Header";

function App() {
  const {
    jobList,
    isLoading,
    hasError,
    categoryList,
    setCategory,
    setSearchInput,
  } = useJobList();
  return (
    <>
      <div className="mainAppContainer">
        <Header
          setSearchInput={setSearchInput}
          setCategory={setCategory}
          categoryList={categoryList}
        />
      </div>
    </>
  );
}

export default App;
