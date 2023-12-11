import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { useAuthStore } from "../hooks/useAuthStore";

const Navbar = () => {
  const { user, startLogout } = useAuthStore();

  return (
    <nav className="app-navbar animate__animated animate__fadeIn">
      <div className="nav-user-name">Hola! {user.name}</div>
      <button className="button-close-sesion" onClick={startLogout}>
        Cerrar sesion <IoExitOutline size={30} style={{ margin: "0 0.2rem" }} />
      </button>
    </nav>
  );
};

export default Navbar;
