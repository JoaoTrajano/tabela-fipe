import { Api } from "..";

export const getAllBrands = async (): Promise<any> => {
  try {
    const data = await Api({ path: "/carros/marcas", method: "GET" });
    return data;
  } catch (error) {
    throw new Error("Não foi possível listar as marcas!");
  }
};
