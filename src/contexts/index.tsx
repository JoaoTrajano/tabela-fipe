import { createContext, useState } from 'react';

interface DatasContextType {
  data: any;
  setData: (data: any) => void;
}

const defaultValue: DatasContextType = {
  data: {},
  setData: (e: any) => {},
};

const DatasContext = createContext(defaultValue);

const DatasContextProvider = ({ children }: any) => {
  const [data, setData] = useState<any>({});

  return (
    <DatasContext.Provider value={{ data, setData }}>
      {children}
    </DatasContext.Provider>
  );
};

export { DatasContextProvider, DatasContext };
