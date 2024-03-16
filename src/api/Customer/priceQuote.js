import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
import { BASE_URL } from '../../contants/endpoints'
export const useListPriceQuote = (offset, limit) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/price-quotes?offset=${offset}&limit=${limit}`
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['ListPriceQuote'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useReadPriceQuote = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `${BASE_URL}/price-quotes/{uuid}?uuid=${id}`
      )
      return response.data
    } catch (error) {
      throw error
    }
  }

  return useQuery({
    queryKey: ['ReadPriceQuote', id],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useCreatePriceQuote = async (data) => {
  return api
    .post(`${BASE_URL}/price-quotess`, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}
export const useUpdatePriceQuote = async (id, data) => {
  try {
    const response = await api.put(`${BASE_URL}/price-quotes/${id}`, data)
    return response
  } catch (error) {
    throw error
  }
}
export const useDeletePriceQuote = async (id) => {
  try {
    const response = await api.delete(`${BASE_URL}/price-quotes/${id}`)
    return response
  } catch (error) {
    throw error
  }
}
