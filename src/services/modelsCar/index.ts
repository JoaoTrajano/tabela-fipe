import { Api } from "..";

export type Modelo = {
  codigo: number;
  nome: string;
};

export type Ano = {
  codigo: number;
  nome: string;
};

export type Response = {
  modelos: Modelo[];
  anos: Ano[];
};

export const getAllModelsByCode = async (code: number): Promise<Response> => {
  try {
    const data = await Api({
      path: `carros/marcas/${code}/modelos`,
      method: "GET",
    });
    return data as Response;
  } catch (error) {
    throw new Error("Não foi possível listar os modelos!");
  }
};
