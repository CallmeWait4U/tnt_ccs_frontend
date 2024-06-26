import { useQuery } from '@tanstack/react-query'
import { api } from '../../configs/AxiosConfigs'
import { BASE_URL } from '../../contants/endpoints'

export const useGetTypeComplaint = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/complaint/type/selector`)
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
export const useGetDetailType = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/complaint/type/detail?uuid=${id}`)
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
export const useCreateComplaintType = async (data) => {
  try {
    console.log(data)
    const response = await api.post(`${BASE_URL}/complaint/type/create`, data)
    return response.data
  } catch (error) {
    throw error
  }
}
export const useGetComplaint = (offset, limit) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `/complaint/all?offset=${offset}&limit=${limit}`
      )
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
export const useReadComplaint = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/complaint/detail?uuid=${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }

  return useQuery({
    queryKey: ['ReadComplaint', id],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}

export const useDeleteTypeComplaint = async (uuid) => {
  try {
    console.log(uuid)
    const response = await api.delete(`${BASE_URL}/complaint/type/delete`, {
      data: { uuid }
    })
    return response
  } catch (error) {
    throw error
  }
}
export const useGetComplaintActivity = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(
        `${BASE_URL}/complaint/activity/all?complaintUUID=${id}`
      )
      return response.data
    } catch (error) {
      throw error
    }
  }

  return useQuery({
    queryKey: ['ReadComplaintActivity', id],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
export const useCreateComplaintActivity = async (data) => {
  try {
    console.log(data)
    const response = await api.post(
      `${BASE_URL}/complaint/activity/create`,
      data
    )
    return response.data
  } catch (error) {
    throw error
  }
}
