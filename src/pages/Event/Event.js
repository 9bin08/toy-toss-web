import React from "react";
import Container from "../../components/@common/Container/Container";
import useModalContext from "../../hooks/useModalContext";

const Event = () => {
  const { Modal, openModal } = useModalContext();

  return (
    <>
      <Container title="Event"></Container>
    </>
  );
};

export default Event;
