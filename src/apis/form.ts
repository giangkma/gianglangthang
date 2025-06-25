import { ICreateBookingSaleBody } from 'domain/index'
import { axios } from 'libs/axios'

export const postBookingSale = async (
  data: ICreateBookingSaleBody
): Promise<void> => {
  return axios.post('/customer/booking-sale', data)
}
