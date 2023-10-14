import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ProviderWrapper from "./redux/ProviderWrapper.tsx";
import { store } from "./redux/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderWrapper store={store}>
      <App />
    </ProviderWrapper>
  </React.StrictMode>
);
