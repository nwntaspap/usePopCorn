import { useState } from "react";
import MoviesList from "./MoviesList.jsx";
import ToggleBoxButton from "./ToggleBoxButton.jsx";

function ListBox({ movies }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggleBox() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="box">
      <ToggleBoxButton isOpen={isOpen} onToggle={handleToggleBox} />
      {isOpen && <MoviesList movies={movies} />}
    </div>
  );
}

export default ListBox;
