import api from '..'

export const getAllModelsByCode = async(code: number): Promise<any> => {
  try {
    const { data } = await api.get(`/carros/marcas/${code}/modelos`)
    return data;

  } catch (error) {
    console.log(error)
  }
}