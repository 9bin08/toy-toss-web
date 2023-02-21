import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenProvider from "../provider/TokenProvider";
import ServiceProvider from "../provider/ServiceProvider";
import { ModalProvider } from "../hooks/useModalContext";
import Home from "../pages/Home/Home";
import Event from "../pages/Event/Event";
import Payment from "../pages/Payment/Payment";
import Stock from "../pages/Stock/Stock";
import All from "../pages/All/All";
import Navigation from "../components/Navigation/Navigation";

class AppRoutes extends React.Component {
  render() {
    return (
      <TokenProvider>
        <ServiceProvider>
          <BrowserRouter>
            <ModalProvider>
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/event" element={<Event />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/stock" element={<Stock />} />
                  <Route path="/all" element={<All />} />
                </Routes>
              </main>
              <Navigation />
            </ModalProvider>
          </BrowserRouter>
        </ServiceProvider>
      </TokenProvider>
    );
  }
}

export default AppRoutes;
