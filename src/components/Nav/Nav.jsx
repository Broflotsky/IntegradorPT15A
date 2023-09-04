/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import PATHROUTES from "../../helpers/PathRoutes.helper";

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div>
      <Link to={PATHROUTES.HOME}>Home</Link>
      <Link to={PATHROUTES.ABOUT}>About</Link>
      <Link to={PATHROUTES.FAVORITES}>Favorites</Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
