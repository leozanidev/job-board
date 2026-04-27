import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { JobProvider } from "./context/JobContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <JobProvider>
        <App />
      </JobProvider>
    </StrictMode>
  </BrowserRouter>,
);
