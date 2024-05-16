import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
import { BASE_URL } from '../../contants/endpoints'
export const useListCustomer = (offset, limit, searchModel) => {
  const fetchData = async () => {
    console.log('searchModel in cus', searchModel)
    if (searchModel) {
      try {
        const response = await api.get(
          `/customers/all?offset=${offset}&limit=${limit}&searchModel=${JSON.stringify(
            searchModel
          )}`
        )
        return response.data
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const response = await api.get(
          `/customers/all?offset=${offset}&limit=${limit}`
        )
        return response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
  return useQuery({
    queryKey: ['ListCustomer'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useReadCustomer = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/customers/detail?uuid=${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }

  return useQuery({
    queryKey: ['ReadCustomer', id],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useCreateCustomer = async (data) => {
  try {
    const type = data.isBusiness ? 'business' : 'individual'
    data.hasAccount = data.hasAccount ? 'PENDING' : 'NOTAPPROVED'
    const response = await api.post(
      `${BASE_URL}/customers/create/${type}`,
      data
    )
    return response.data
  } catch (error) {
    throw error
  }
}
export const useUpdateCustomer = async (id, data) => {
  try {
    const response = await api.put(`${BASE_URL}/customers/${id}`, data)
    return response
  } catch (error) {
    throw error
  }
}
export const useDeleteCustomer = async (uuid) => {
  try {
    console.log(uuid)
    const response = await api.delete(`${BASE_URL}/customers/delete`, {
      data: { uuid }
    })
    return response
  } catch (error) {
    throw error
  }
}
export const useListMyCustomer = (offset, limit) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/customers/divideByEmployee?offset=${offset}&limit=${limit}`
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  return useQuery({
    queryKey: ['ListMyCustomer'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useGetPhaseList = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/phases/list-phase-options/all`)
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

export const useGetPriceQuoteRequest = (uuid) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/price-quote-requests/selector/byCustomer?customerUUID=${uuid}`
      )
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['ListPriceQuoteRequest', uuid],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useGetPriceQuote = (uuid) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/price-quotes/selector/byCustomer?customerUUID=${uuid}`
      )
      return response.data
    } catch (error) {
      throw error
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
export const useGetBills = (uuid) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/bills/selector/byCustomer?customerUUID=${uuid}`
      )
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['ListBills', uuid],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useGetTask = (uuid) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/activities/tasks/allbycustomer?customerUUID=${uuid}$history=true`
      )
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['ListTask', uuid],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useGetComplaint = (uuid) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/complaint/selector/byCustomer?customerUUID=${uuid}`
      )
      return response.data
    } catch (error) {
      throw error
    }
  }
  return useQuery({
    queryKey: ['ListComplaint', uuid],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
