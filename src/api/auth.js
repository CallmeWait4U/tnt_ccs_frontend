import { api } from '../configs/AxiosConfigs'
import { BASE_URL } from '../contants/endpoints'

const useSignin = async (data) => {
  try {
    const response = await api.post(`http://localhost:3001/auth/sign-in`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

const useRegister = async (data) => {
  try {
    const response = await api.post(`${BASE_URL}/register`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

export { useRegister, useSignin }
