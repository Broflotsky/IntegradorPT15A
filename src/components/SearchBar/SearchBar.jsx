import { useState } from "react";

/* eslint-disable react/prop-types */
const SearchBar = (props) => {
  const [id, setId] = useState('')

  const handleChange = (e) => {
    setId(e.target.value)
    // console.log(id)
  }
  const { onSearch } = props;
  return (
    <div>
      <input type="search" placeholder="Write ID...🔍" onChange={handleChange} value={id}/>
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}

export default SearchBar;