// ActiveContext.js
import React, { createContext, useState } from "react";
import { useSharedValue } from "react-native-reanimated";

// Create context
export const ActiveContext = createContext();

// Create a provider component
export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  // Update function for shared value
  const updateActive = (value) => {
    console.log(`Active Provider`, value);

    setActive(value);
  };

  console.log("active: ", active);

  return (
    <ActiveContext.Provider value={{ active, updateActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
