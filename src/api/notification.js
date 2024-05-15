import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
export const useGetNotification = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/notifications/all`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['GetNotification'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
