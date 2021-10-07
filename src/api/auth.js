import api from './'

export const login = (data) => api.post('/api/auth/login', data)