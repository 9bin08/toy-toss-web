import React from "react";

import TokenProvider from "../provider/TokenProvider";
import { ModalProvider } from "../hooks/useModalContext";
import Home from "../pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navigation from "./Components/Navigation/Navigation";
// import { createGlobalStyle, ThemeProvider } from "styled-components";
// import theme from "./Styles/theme";

class Routes extends React.Component {
  render() {
    return (
      <TokenProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ModalProvider>
      </TokenProvider>
    );
  }
}

export default Routes;
