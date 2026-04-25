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
      <div className="appTitle">
        <h1>Job Board</h1>
      </div>
      <div className="searchSection">
        <label>
          <input
            aria-label="Busca por termo "
            type="text"
            placeholder="Digite sua busca"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </label>
        <select
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
    </header>
  );
};

export default Header;
