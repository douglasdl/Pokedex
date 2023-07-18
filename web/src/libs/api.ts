import axios from 'axios'

export const api = axios.create({
  baseURL: "",
})

export function setRedisData(key: string, value: number) {
  api
    .post(key, {
      value,
    })
    .then((response) => {
      //console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
  // .finally(() => {
  //   console.log('OK')
  // })
}