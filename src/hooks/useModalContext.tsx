import React, { useState, useContext, createContext } from "react";
import ModalPortal from "../components/ModalPortal/ModalPortal";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import { ERROR_MESSAGE } from "../constants/messages";

export type ModalContextValue = {
  Modal: (props: { children: NonNullable<React.ReactNode> }) => JSX.Element | null;
  openModal: () => void;
  closeModal: () => void;
};

type ModalProviderProps = { children: React.ReactNode };

const ModalContext = createContext<ModalContextValue | null>(null);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal: ModalContextValue["openModal"] = () => {
    console.log('open modal')
    console.log(isModalOpened);
    document.body.style.overflow = "hidden";
    setIsModalOpened(true);
  };

  const closeModal: ModalContextValue["closeModal"] = () => {
    document.body.style.overflow = "auto";
    setIsModalOpened(false);
  };

  const Modal: ModalContextValue["Modal"] = ({ children, ...props }) => {
    if (isModalOpened) {
      return (
        <ModalPortal closeModal={closeModal} {...props}>
          <ModalWindow>{children}</ModalWindow>
        </ModalPortal>
        
      );
    }

    return null;
  };

  return (
    <ModalContext.Provider value={{ Modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw Error(ERROR_MESSAGE.HOOKS.CANNOT_FIND_MODAL_CONTEXT);
  }

  return modalContext;
};

export default useModalContext;
