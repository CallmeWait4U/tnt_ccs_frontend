import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
import { BASE_URL } from '../../contants/endpoints'

export const useCreateComplaint = async (data) => {
  try {
    console.log(data)
    const response = await api.post(`${BASE_URL}/complaint/create`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

export const useGetComplaint = (offset, limit) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/complaint/all?offset=${offset}&limit=${limit}`
      )
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['ListPhaseOptions'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useReadComplaint = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/complaint/detail?uuid=${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }

  return useQuery({
    queryKey: ['ReadComplaint', id],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
