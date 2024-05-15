import { useQuery } from '@tanstack/react-query'
import { api } from '../configs/AxiosConfigs'
const useListComapny = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/company/all`)
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['ListCompany'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}

export { useListComapny }
