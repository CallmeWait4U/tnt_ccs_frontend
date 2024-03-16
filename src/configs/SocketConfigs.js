import { io } from 'socket.io-client'
const accessToken = localStorage.getItem('tnt.token')
export const socket = io('http://localhost:4001', {
  auth: {
    token: accessToken
  }
})
