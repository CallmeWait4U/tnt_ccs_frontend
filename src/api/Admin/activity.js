import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
import { BASE_URL } from '../../contants/endpoints'
export const useGetAllActivities = (offset, limit) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/activities/all?offset=${offset}&limit=${limit}`
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['ListActivity'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useReadActivity = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/activities/detail?uuid=${id}`)
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
export const useCreateActivity = async (data) => {
  try {
    const response = await api.post(`${BASE_URL}/activities/create`, data)
    return response
  } catch (error) {
    throw error
  }
}
export const useUpdateActivity = async (data) => {
  try {
    console.log(data)
    const response = await api.put(`${BASE_URL}/activities/update`, data)
    return response
  } catch (error) {
    throw error
  }
}
export const useDeleteActivity = async (id) => {
  try {
    const response = await api.delete(`${BASE_URL}/activities/delete`)
    return response
  } catch (error) {
    throw error
  }
}
