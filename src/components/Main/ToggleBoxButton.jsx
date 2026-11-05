function ToggleBoxButton({ isOpen, onToggle }) {
  return (
    <button className="btn-toggle" onClick={() => onToggle((open) => !open)}>
      {isOpen ? "–" : "+"}
    </button>
  );
}

export default ToggleBoxButton;
