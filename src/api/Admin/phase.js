import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
import { BASE_URL } from '../../contants/endpoints'
export const useGetAllPhases = (offset, limit) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/phases?offset=${offset}&limit=${limit}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['ListPhase'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useReadPhase = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/phases/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }

  return useQuery({
    queryKey: ['ReadPhase', id],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}

export const useCreatePhase = async (data) => {
  try {
    console.log(data)
    const response = await api.post(`${BASE_URL}/phases`, data)
    return response.data
  } catch (error) {
    throw error
  }
}
export const useUpdatePhase = async (data) => {
  try {
    console.log(data)
    const response = await api.put(`${BASE_URL}/phases/${data.uuid}`, data)
    return response.data
  } catch (error) {
    throw error
  }
}
export const useDeletePhase = async (data) => {
  try {
    console.log(data)
    const response = await api.delete(`${BASE_URL}/phases/${data}`)
    return response.data
  } catch (error) {
    throw error
  }
}
