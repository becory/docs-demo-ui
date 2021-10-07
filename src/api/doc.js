import api from './'

export const getDocList = (params) => api.get(`/api/doc`, {params})
export const getDoc = (docId) => api.get(`/api/doc/${docId}`)
export const createDoc = (data) => api.post(`/api/doc`, data)
export const patchDoc = (docId, data) => api.patch(`/api/doc/${docId}`, data)
export const getDocAuth = (docId) => api.get(`/api/doc/${docId}/doc_auth`)
export const patchDocAuth = (docId, data) => api.patch(`/api/doc/${docId}/doc_auth`, data)