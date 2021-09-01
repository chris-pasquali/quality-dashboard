import axios from "axios"

axios.interceptors.request.use((config) => {
  config.headers["app-id"] = "612e2c9309da305355bb1b47"
  return config
})

export const request = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}