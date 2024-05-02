import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
// import { BASE_URL } from '../../contants/endpoints'

export const useGetStatistic = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/customers/statistic`)
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['CustomerStatistic'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
