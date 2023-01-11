import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@stores/store";
import "./assets/css/reset.css";

import styled from "styled-components";
import Container from "@components/Container";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const Background = styled(Container)`
  width: ${(props) => props.width || "100vw"};
  height: ${(props) => props.height || "100vh"};
  background-color: ${(props) => props.color || "#F7F8FB"};
  position: absolute;
  overflow: scroll;
`;

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Background>
        <App />
      </Background>
    </BrowserRouter>
  </Provider>
);
