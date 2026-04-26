// Importando tipo da lista de categorias
import type { Category } from "../types";

interface props {
  setSearchInput: (value: string) => void;
  setCategory: (value: string) => void;
  categoryList: Category[];
}

const Header = ({ setSearchInput, setCategory, categoryList }: props) => {
  return (
    <header>
      <div className="bg-sky-700 flex flex-col items-center justify-center w-1/1 p-10 gap-10">
        <h1 className="text-7xl text-gray-300">Job Board</h1>
        <div className="searchSection flex justify-center items-center gap-5 bg-sky-700">
          <label>
            <input
              className="text-white border rounded-md p-2 h-10 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Busca por termo "
              type="text"
              placeholder="Digite sua busca"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
          <select
            className="text-gray-400 border rounded-md p-2 h-10 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Filtro por categoria"
            name="category"
            onChange={(e) => setCategory(e.target.value)}>
            {categoryList.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
