import api from '..'

export const getPriceTableFipe = async(data: any): Promise<any> => {
  const { codeBrand, codeModel, codeYear} = data;

  
  try {
    const { data } = await api.get(`/carros/marcas/${codeBrand}/modelos/${codeModel}/anos/${codeYear}`)
    return data;

  } catch (error) {
    console.log(error)
  }
}