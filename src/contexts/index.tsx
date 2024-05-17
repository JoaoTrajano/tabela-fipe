import { createContext, useState } from "react";

type DatasContextTypeData = {
  codeBrand: number;
  codeModel: number;
  codeYear: string;
};

interface DatasContextType {
  data: DatasContextTypeData;
  setData: (data: DatasContextTypeData) => void;
}

const defaultValue: DatasContextType = {
  data: {
    codeBrand: 0,
    codeModel: 0,
    codeYear: "",
  },
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
