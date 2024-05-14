import { api } from '../configs/AxiosConfigs'
import { BASE_URL } from '../contants/endpoints'

const useSignin = async (data) => {
  try {
    const response = await api.post(`${BASE_URL}/auth/sign-in`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

const useRegister = async (data) => {
  try {
    console.log(data)
    const response = await api.post(`${BASE_URL}/auth/sign-up`, data)
    return response.data
  } catch (error) {
    throw error
  }
}
const useSignOut = async () => {
  try {
    const response = await api.post(`${BASE_URL}/auth/sign-out`)
    return response.data
  } catch (error) {
    throw error
  }
}

export { useRegister, useSignOut, useSignin }
