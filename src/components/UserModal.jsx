import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useUiStore } from "../hooks/useUiStore";
import { useUsersStore } from "../hooks/useUsersStore";
import { formModalValues } from "../helpers/formsData";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const UserModal = () => {
  const { isModalOpen, closeModal } = useUiStore();
  const { activeUser, startSaveUser, startClearActiveUser } = useUsersStore();
  const [formValues, setFormValues] = useState(formModalValues);

  useEffect(() => {
    if (activeUser !== null) {
      setFormValues({ ...activeUser });
    }
  }, [activeUser]);

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const save = await startSaveUser(formValues);
    if (save) {
      setFormValues(formModalValues);
      closeModal();
    }
  };

  const onCloseModal = () => {
    closeModal();
    startClearActiveUser();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      overlayClassName="modal-fondo"
    >
      <h2 className="layout-auth-title">
        {activeUser ? "Editar Usuario" : "Nuevo Usuario"}
      </h2>
      <form className="form" on onSubmit={onSubmit}>
        <input
          className="input-form"
          id="name"
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={onInputChange}
          value={formValues.name}
        />
        <input
          className="input-form"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          onChange={onInputChange}
          value={formValues.email}
        />
        {!activeUser && (
          <input
            className="input-form"
            id="password"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={onInputChange}
            value={formValues.password}
          />
        )}
        <input
          className="input-form"
          id="phone"
          type="phone"
          placeholder="Telefono"
          name="phone"
          onChange={onInputChange}
          value={formValues.phone}
        />
        <input
          className="button-submit"
          type="submit"
          value={activeUser ? "EDITAR" : "CREAR"}
        />
      </form>
    </Modal>
  );
};

export default UserModal;
