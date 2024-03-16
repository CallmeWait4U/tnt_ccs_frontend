import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
import { BASE_URL } from '../../contants/endpoints'
export const useGetAllAccounts = (offset, limit, type) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/accounts/all?offset=${offset}&limit=${limit}&type=${type}`
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['ListAccount'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useReadAccount = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/accounts/detail?uuid=${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }

  return useQuery({
    queryKey: ['ReadCustomer', id],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}

export const useCreateAccount = async (data) => {
  try {
    const response = await api.post(`${BASE_URL}/accounts/create`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

export const useDeleteAccount = async (uuid) => {
  try {
    console.log(uuid)
    const response = await api.delete(`${BASE_URL}/accounts/delete`, uuid)
    return response.data
  } catch (error) {
    throw error
  }
}
export const useUpdateAccount = async (data) => {
  try {
    const response = await api.put(`${BASE_URL}/accounts/update`, data)
    return response.data
  } catch (error) {
    throw error
  }
}
