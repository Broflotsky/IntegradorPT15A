/* eslint-disable react/prop-types */
import SearchBar from "../SearchBar/SearchBar"

const Nav = (props) => {
    const {onSearch} =  props;
  return (
    <div>
        <SearchBar onSearch={onSearch} />
    </div>
  )
}

export default Nav