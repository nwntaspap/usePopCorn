import Logo from "./Logo.jsx";
import NumResults from "./NumResults.jsx";
import SearchBar from "./SearchBar.jsx";

function Navbar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <NumResults movies={movies} />
    </nav>
  );
}

export default Navbar;
