import { useState } from "react";
import { useUserContext } from "../../contexts/user";
import { Modal } from "../modal/component";

export const Header = () => {
  const { user, login, logout } = useUserContext();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header>
      Header
      {user && <span>{user.name}</span>}
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Login</button>
      )}
      {isVisible && <Modal onClose={() => setIsVisible(false)}></Modal>}
    </header>
  );
};
