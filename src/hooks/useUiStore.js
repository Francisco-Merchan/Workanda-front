import { useDispatch, useSelector } from "react-redux";
import { onCloseModal, onOpenModal } from "../store/ui/uiSlice";

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isModalOpen } = useSelector((state) => state.ui);

  const openModal = () => {
    dispatch(onOpenModal());
  };

  const closeModal = () => {
    dispatch(onCloseModal());
  };

  return {
    isModalOpen,

    closeModal,
    openModal,
  };
};
