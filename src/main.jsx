import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/Context.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ContextProvider>
    <BrowserRouter basename="/QenLogin/">
      <App />
    </BrowserRouter>
      <ToastContainer />
  </ContextProvider>
  // </React.StrictMode>
);
