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
export const useGetHomePage = (offset, limit) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/user/getHomepage?offset=${offset}&limit=${limit}`
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['HomePageData'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
