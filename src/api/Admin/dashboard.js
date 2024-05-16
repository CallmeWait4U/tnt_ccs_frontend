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
export const useGetCustomerPerPhase = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/statistic/customersPerPhase`)
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['CustomerPerPhase'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useGetPriceQuoteBill = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/statistic/priceQuote-bill`)
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['PriceQuoteBill'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useCustomerFollowingSource = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/statistic/customerFollowingSource`)
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['CustomerFollowingSource'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useCustomerByLocation = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/statistic/customersByLocation`)
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['CustomerByLocation'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useCustomerPhaseByMonth = (option) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/statistic/customerPhaseByMonth?option=${option}`
      )
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['CustomerPhaseByMonth', option],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const usePriceQuoteByMonth = (option) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/statistic/priceQuoteByMonth?option=${option}`
      )
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['PriceQuoteByMonth', option],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useComplaint = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/statistic/complaints`)
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['ComplaintStatistic'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
