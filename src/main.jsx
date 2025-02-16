import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { lazy } from "react-lazy";
import { Suspense } from "react";
import { suspend } from "suspend-react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
