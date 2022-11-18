import { useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const PageContext = createContext();

export default function PageContextProvider({ children }) {
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setPage(1)
  }, [location])

  return (
     <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  )
}
