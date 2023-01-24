import { createContext, useState, useContext } from "react";

// ! 1. Creación del contexto
export const PageContext = createContext();

// ! 2. Se crea el provider
export const PageProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState([]);

  // ! Añadir datos al contexto
  const saveData = (data) => {
    setContextValue([...contextValue, { data }]);
  };
  // !Obtener id del estudiante actual
  const getID = (id) => {
    setContextValue([...contextValue, {id}])
  }

  return (
    <PageContext.Provider value={{ contextValue, saveData, getID }}>
      {children}
    </PageContext.Provider>
  );
};

// ! Validamos que los componentes accedan al contexto
export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) throw new Error("Fuera del proveedor");
  return context;
};
