import { useState } from "react";
import ToggleBoxButton from "./ToggleBoxButton.jsx";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggleBox() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="box">
      <ToggleBoxButton isOpen={isOpen} onToggle={handleToggleBox} />
      {isOpen && children}
    </div>
  );
}

export default Box;
