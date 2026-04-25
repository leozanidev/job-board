interface props {
  setSearchInput?: (value: string) => void;
  setCategory?: (value: string) => void;
}

const Header = ({ setSearchInput, setCategory }: props) => {
  return <header>
    <div className="appTitle">
        <h1>Job Board</h1>
    </div>
    <div className="searchSection">
        <label>
            <input type="text" placeholder="Digite sua busca"/>
        </label>
        <select name="" id="">
            <option value=""></option>
        </select>
    </div>
  </header>>;
};

export default Header;
