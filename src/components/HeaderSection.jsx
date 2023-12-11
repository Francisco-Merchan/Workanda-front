import React from "react";
import { IoPersonAdd } from "react-icons/io5";
import { useUiStore } from "../hooks/useUiStore";
import { useUsersStore } from "../hooks/useUsersStore";

export const HeaderSection = () => {
  const { openModal } = useUiStore();
  const { startSearchUsers } = useUsersStore();

  return (
    <div className="header-section animate__animated animate__fadeIn">
      <input
        className="input-search"
        type="search"
        placeholder="BUSCAR"
        onChange={(event) => startSearchUsers(event.target.value)}
      />

      <button className="button-add" onClick={openModal}>
        {" "}
        <IoPersonAdd size={20} style={{ margin: "0 0.2rem" }} /> Nuevo Usuario
      </button>
    </div>
  );
};
