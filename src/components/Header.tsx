interface props {
  setSearchInput: (value: string) => void;
}

const Header = ({ setSearchInput }: props) => {
  return (
    <header>
      <div className="bg-sky-700 flex flex-col items-center justify-center w-1/1 p-10 gap-10">
        <h1 className="text-7xl text-gray-300 font-serif">Job Board</h1>
        <div className="searchSection flex justify-center items-center gap-5 bg-sky-700 font-sans">
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
    </header>
  );
};

export default Header;
