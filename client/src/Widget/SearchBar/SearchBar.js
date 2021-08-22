import './SearchBar.css';

function SearchBar({searchfield, searchChange}) {
  return (
    <div className="SearchBar-container">
        
       <input 
        type="text" 
        name="search" 
        placeholder="Search for your bank"
        onChange={searchChange}/>
    </div>
  );
}

export default SearchBar;