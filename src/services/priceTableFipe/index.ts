import { Api } from "..";

export const getPriceTableFipe = async (data: any): Promise<any> => {
  const { codeBrand, codeModel, codeYear } = data;

  try {
    const data = await Api({
      path: `carros/marcas/${codeBrand}/modelos/${codeModel}/anos/${codeYear}`,
      method: "GET",
    });
    return data;
  } catch (error) {
    throw new Error("Não foi possível consultar o preço no momento!");
  }
};
