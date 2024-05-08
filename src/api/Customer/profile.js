import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'

export const useGetProfile = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/user/info`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['Profile'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
