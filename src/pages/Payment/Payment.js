import React from "react";
import Container from "../../components/@common/Container/Container";
import useModalContext from "../../hooks/useModalContext";

const Payment = () => {
  const { Modal, openModal } = useModalContext();

  return (
    <>
      <Container title="Payment"></Container>
    </>
  );
};

export default Payment;
