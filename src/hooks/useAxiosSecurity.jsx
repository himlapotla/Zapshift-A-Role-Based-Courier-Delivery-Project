import axios from 'axios'
import React from 'react'

const useAxiosSecurity = () => {

    const axiosSecurity = axios.create({
        baseURL : 'http://localhost:3000'
    })

  return axiosSecurity
}

export default useAxiosSecurity