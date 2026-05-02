import axios, { AxiosError } from 'axios'
import React, { useEffect } from 'react'
import UseAuth from './UseAuth'
import { useNavigate } from 'react-router'

const axiosSecurity = axios.create({
  baseURL: 'http://localhost:3000'
})

const useAxiosSecurity = () => {

  const { user, logOutUser } = UseAuth()
  const navigate = useNavigate()

  useEffect( ()=>{
    // interceptors is a middleman: Before any request goes from React app to server, this function runs. And config is an object that contains everything about the request. Such as {  url: "/parcels", method: "get"...}
    const reqInterceptor = axiosSecurity.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`
      return config
    })

    const resInterceptor = axiosSecurity.interceptors.response.use( (response)=>{
      return response
    },
    (error)=>{
      console.log(error)
      const status = error.status
      if(status === 401 || status === 403) {
        logOutUser()
        .then(() => {
          navigate('/login')
        })
      }
      return Promise.reject(error)
    })

    return () => {
      axiosSecurity.interceptors.request.eject(reqInterceptor)
      axiosSecurity.interceptors.response.eject(resInterceptor)
    }
  }, [user])

  return axiosSecurity
}
export default useAxiosSecurity