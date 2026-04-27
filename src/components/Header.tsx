import { useLocation } from "react-router-dom";

interface props {
  setSearchInput: (value: string) => void;
  searchInput?: string;
  jobCount: number;
}

const Header = ({ setSearchInput, searchInput, jobCount }: props) => {
  const location = useLocation();
  return (
    <header className="w-1/1">
      <div className="bg-sky-700 flex flex-col items-center justify-center w-1/1 p-10 gap-10">
        <h1 className="text-7xl text-gray-300 font-serif">Job Board</h1>
      </div>
      {location.pathname === "/" ? (
        <div>
          <div>
            <div className="flex justify-center items-center bg-sky-700 font-sans pb-5">
              <label>
                <input
                  className="text-white border rounded-md p-2 h-10 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Busca por termo "
                  type="text"
                  placeholder="Digite sua busca"
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="font-sans flex items-center justify-center p-3 text-xl">
            <span>
              {searchInput !== ""
                ? `${jobCount} results for ${searchInput}.`
                : `${jobCount} results for developer.`}
            </span>
          </div>{" "}
        </div>
      ) : null}
    </header>
  );
};

export default Header;
