import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
import { BASE_URL } from '../../contants/endpoints'
export const useListProduct = (offset, limit) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/products?offset=${offset}&limit=${limit}`
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['ListProduct'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useReadProduct = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/products/{uuid}?uuid=${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }

  return useQuery({
    queryKey: ['ReadProduct', id],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useCreateProduct = async (data) => {
  return api
    .post(`${BASE_URL}/products`, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error
    })
}
export const useUpdateProduct = async (data) => {
  try {
    const uuid = data.get('uuid')
    const response = await api.put(`${BASE_URL}/products/${uuid}`, data)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const useDeleteProduct = async (id) => {
  try {
    const response = await api.delete(`${BASE_URL}/products/${id}`)
    return response
  } catch (error) {
    throw error
  }
}
