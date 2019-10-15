// import { getCookie, signOut, isLogin } from 'util/auth'
import axios from 'axios'
import qs from 'qs'

const baseURL = 'http://localhost:3008/v1'
const request = axios.create({
  baseURL,
})

// 拦截器
// request.interceptors.request.use((config) => {
  // if (isLogin()) {
  //   const token = getCookie('token').replace(/(^\")|(\"$)/g, '');
  //   config.headers.Authorization = `Bearer ${token}`;
  //   return config;
  // }
  // return config
// }, error => Promise.reject(error))

request.interceptors.response.use(response => response, error => Promise.reject(error))

request.post = (url, data) => axios({
  method: 'post',
  url: baseURL + url,
  data: qs.stringify(data),
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
})

request.get = (url, data) => axios({
  method: 'get',
  url: baseURL + url,
  params: qs.stringify(data),
})
export default request