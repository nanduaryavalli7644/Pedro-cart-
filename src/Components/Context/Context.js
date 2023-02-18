import { createContext, useContext, useState } from "react";

export const appContext = createContext();


const Context = ({ children }) => {
  const [basket, setBasket] = useState([]);



  return (
    <appContext.Provider value={[basket, setBasket ]}>
      {children}
    </appContext.Provider>
  );
};

export const GetContext = () => {
    return useContext(appContext);
  };
export default Context;