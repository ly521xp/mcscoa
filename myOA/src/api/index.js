import axios from "axios";
axios.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
}, error => {
  return Promise.reject(error)
})

//
let base = process.env.API_ROOT
export const POST = (url, params) => {
  return axios.post(`${base}${url}`, params).then(res => res.data)
}
export const GET = (url, params) => {
  return axios(`${base}${url}`, { params: params }).then(res => res.data)
}
export const DELETE = (url, params) => {
  return axios.delete(`${base}${url}`, { params: params }).then(res => res.data)
}
export const PUT = (url, params) => {
  return axios.put(`${base}${url}`, params).then(res => res.data)
}
