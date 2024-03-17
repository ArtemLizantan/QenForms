import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const contextValue = { password, setPassword, email, setEmail };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useContextData = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContextData must be used within a ContextProvider");
  }
  return context;
};
