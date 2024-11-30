import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // Include this if needed
import reportWebVitals from "./reportWebVitals";
import { LanguageProvider } from "./Components/Languagecontext"; // Ensure this path matches

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter> {/* Include this if using React Router */}
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);

reportWebVitals();
