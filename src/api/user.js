import api from './'

export const postUserRegister = (data) => api.post('/api/user/register', data)
export const getUserList = (params) => api.get('/api/user', {params})