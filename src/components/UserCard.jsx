import React from "react";
import { FaUserTie } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useUsersStore } from "../hooks/useUsersStore";
import { useUiStore } from "../hooks/useUiStore";

const UserCard = ({ user }) => {
  const { startSetActiveUser, startDeleteUser } = useUsersStore();
  const { openModal } = useUiStore();

  const setActiveUser = (id) => {
    startSetActiveUser(id);
    openModal();
  };
  return (
    <div className="user-card">
      <FaUserTie size={50} />
      <div className="user-card-content animate__animated animate__fadeIn">
        <p className="user-card-name"> {user.name}</p>
        <p>
          <MdEmail color="#de4137" /> {user.email}
        </p>
        <p>
          <FaPhoneAlt color="#de4137" /> {user.phone}
        </p>
      </div>
      <div>
        <button
          className="button-delete-user"
          onClick={() => startDeleteUser(user.id)}
        >
          <MdDelete size={15} color="white" />
        </button>
        <button
          className="button-delete-user"
          onClick={() => setActiveUser(user.id)}
        >
          <FaEdit size={15} color="white" />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
