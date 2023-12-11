import React, { useEffect } from "react";
import { useUsersStore } from "../hooks/useUsersStore";
import AlertMessage from "./AlertMessage";
import UserCard from "./UserCard";

export const UsersList = () => {
  const { users, startgetUsers } = useUsersStore();

  useEffect(() => {
    startgetUsers();
  }, []);

  return (
    <div className="cards-container animate__animated animate__fadeIn">
      {users.length === 0 ? (
        <AlertMessage />
      ) : (
        users.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
};
