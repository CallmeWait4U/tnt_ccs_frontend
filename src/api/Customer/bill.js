import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
import { BASE_URL } from '../../contants/endpoints'
export const useListBill = (offset, limit) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/bills?offset=${offset}&limit=${limit}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['ListBill'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useReadBill = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/bills/{uuid}?uuid=${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }

  return useQuery({
    queryKey: ['ReadBill', id],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useCreateBill = async (data) => {
  return api
    .post(`${BASE_URL}/bills`, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}
export const useUpdateBill = async (id, data) => {
  try {
    const response = await api.put(`${BASE_URL}/bills/${id}`, data)
    return response
  } catch (error) {
    throw error
  }
}
export const useDeleteBill = async (id) => {
  try {
    const response = await api.delete(`${BASE_URL}/bills/${id}`)
    return response
  } catch (error) {
    throw error
  }
}
