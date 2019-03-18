import axios from 'axios'
import Config from 'react-native-config'

const request = (path, method, data) => {
  const url = `${Config.API_URL}${path}`
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  return axios({
    data: data ? data : undefined,
    headers,
    method,
    url,
  })
    .then((response) => ({error: false, data: response.data}))
    .catch((error) => {
      if (error.response) {
        return {error: true, message: error.response.data}
      } else if (error.request) {
        const message = error.request._response || 'Connection error'
        return {error: true, message}
      } else {
        return {error: true, message: error.message}
      }
    })
}

export default request
