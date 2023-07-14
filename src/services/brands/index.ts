import api from '..'

export const getAllBrands = async(): Promise<any> => {
  try {
    const { data } = await api.get('/carros/marcas')
    return data;

  } catch (error) {
    console.log(error)
  }
}