import React, { useEffect } from "react";
import { openWebSocketToUpbit } from "../../api/upbit/upbit";
import Container from "../../components/@common/Container/Container";
import useModalContext from "../../hooks/useModalContext";

const Stock = () => {
  const { Modal, openModal } = useModalContext();

  useEffect(() => {
    // fetchUpbitMarketCoinList();
    // openWebSocketToUpbit("BTC");
  }, []);

  return (
    <>
      <Container title="Stock"></Container>
    </>
  );
};

export default Stock;
