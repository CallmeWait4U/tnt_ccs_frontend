import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
import { BASE_URL } from '../../contants/endpoints'
export const useListCustomer = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/customers`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['ListCustomer'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
const useReadCustomer = async (id) => {
  try {
    const response = await api.get(`${BASE_URL}/customers/${id}`)
    return response
  } catch (error) {
    throw error
  }
}
const useCreateCustomer = async (data) => {
  try {
    const response = await api.post(`${BASE_URL}/customers`, data)
    return response
  } catch (error) {
    throw error
  }
}
const useUpdateCustomer = async (id, data) => {
  try {
    const response = await api.put(`${BASE_URL}/customers/${id}`, data)
    return response
  } catch (error) {
    throw error
  }
}
const useDeleteCustomer = async (id) => {
  try {
    const response = await api.delete(`${BASE_URL}/customers/${id}`)
    return response
  } catch (error) {
    throw error
  }
}
export {
  useCreateCustomer,
  useDeleteCustomer,
  useReadCustomer,
  useUpdateCustomer
}
