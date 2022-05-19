import { useState } from "react";
import { Context } from "../main";

export const Context = createContext(null);

const Provider = ({ children }) => {
  const [name, setName] = useState("Steven");

  const globalData = {
    user: {
      name: setName,
      age: 41,
    },
    friends: [
      { id: 28, name: "Jos" },
      { id: 33, name: "Els" },
    ],
  };

  return <Context.Provider value={globalData}>{children}</Context.Provider>;
};

export default Provider;
