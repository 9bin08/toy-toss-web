import React from "react";
import Container from "../../components/@common/Container/Container";
import useModalContext from "../../hooks/useModalContext";

const All = () => {
  const { Modal, openModal } = useModalContext();

  return (
    <>
      <Container title="All"></Container>
    </>
  );
};

export default All;
