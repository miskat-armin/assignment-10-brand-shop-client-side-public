import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/authContext";
import "./index.css";
import CustomRouter from "./router/routes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={CustomRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);