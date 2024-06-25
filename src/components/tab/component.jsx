export const Tab = ({ children, onClick, isActive }) => {
  return (
    <button onClick={onClick} disabled={isActive}>
      {children}
    </button>
  );
};
