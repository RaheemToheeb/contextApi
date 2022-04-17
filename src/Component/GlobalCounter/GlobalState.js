import { createContext, useState } from "react";
export const DisplayState = createContext();

export const GlobalState = ({ children }) => {
  const [Display, setDisplay] = useState(2);
  console.log(Display);

  const subCount = () => {
    setDisplay(Display - 2);
  };

  const addCount = () => {
    setDisplay(Display + 2);
  };

  const divCount = () => {
    setDisplay(Display / 2);
  };
  const multCount = () => {
    const rand = Math.random();
    setDisplay(Display * rand);
  };
  const Default = () => {
    setDisplay(Display * 0);
  };
  return (
    <DisplayState.Provider
      value={{ addCount, subCount, multCount, divCount, Display, Default }}
    >
      {children}
    </DisplayState.Provider>
  );
};
