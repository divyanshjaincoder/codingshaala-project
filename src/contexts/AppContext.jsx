import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store logged-in user info
  const [testSubmitted, setTestSubmitted] = useState(false); // Track test submission
  const [testScore, setTestScore] = useState(0); // Store user's score

  return (
    <AppContext.Provider
      value={{ user, setUser, testSubmitted, setTestSubmitted, testScore, setTestScore }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
