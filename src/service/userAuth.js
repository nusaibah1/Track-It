import axios from 'axios'
function  useToken(token) {
      if(token) {
        axios.defaults.headers = {
            Authorization: `${token}`
        }
      }
}

export {
    useToken
}