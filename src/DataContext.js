import React from "react";
import { createContext, useState } from "react";

const DataContext = createContext();

export function DataContextProvider({children}) {
  const [data, setData] = useState({});
  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;