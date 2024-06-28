import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    let newCount = count + 1;
    setCount(newCount);
  };
  const decreaseCounter = () => {
    let newCount = count - 1;
    setCount(newCount);
  };
  return (
    <MyContext.Provider value={{ count, increaseCounter, decreaseCounter }}>
      {children}
    </MyContext.Provider>
  );
};
