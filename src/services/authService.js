import axios from 'axios'

const API_URL = 'http://localhost:3000/auth'

export const register = async (username, email, password, role = 'user') => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
      role,
    })
    return response.data
  } catch (error) {
    throw error.response?.data || 'Erro no registro'
  }
}

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password })
    return response.data
  } catch (error) {
    throw error.response?.data || 'erro no login'
  }
}
