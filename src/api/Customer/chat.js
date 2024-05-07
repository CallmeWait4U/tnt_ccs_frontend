import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
import { BASE_URL } from '../../contants/endpoints'
export const useGetMessage = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/chats/getChatForCustomer`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['GetMessage'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useSendMessage = async (data) => {
  try {
    console.log(data)
    const response = await api.post(`${BASE_URL}/chats/sendMessage`, data)
    return response
  } catch (error) {
    throw error
  }
}
