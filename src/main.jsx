import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ContextProvider>
    <BrowserRouter basename="/QenLogin/">
      <App />
    </BrowserRouter>
  </ContextProvider>
  // </React.StrictMode>
);
