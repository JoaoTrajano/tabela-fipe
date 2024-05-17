import { Api } from "..";

export type Brand = {
  codigo: number;
  nome: string;
};

export const getAllBrands = async (): Promise<Brand[]> => {
  try {
    const data = await Api({ path: "/carros/marcas", method: "GET" });
    return data as Brand[];
  } catch (error) {
    throw new Error("Não foi possível listar as marcas!");
  }
};
