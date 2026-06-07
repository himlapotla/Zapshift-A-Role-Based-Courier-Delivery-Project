import axios from 'axios'
import React from 'react'

const useAxios = () => {

    const axiosSimple = axios.create({
        baseURL: 'http://localhost:3000'
    })

    return axiosSimple
}

export default useAxios