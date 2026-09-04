import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./shared/styles/global.css";
import { CartProvider } from "./features/cart/context/CartProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
     <CartProvider>
        <App />
     </CartProvider>      
    </BrowserRouter>
  </React.StrictMode>
);
