import axios from 'axios'
import React from 'react'

const useAxios = () => {

    const axiosSimple = axios.create({
        baseURL: 'https://courier-delivery-zapshift.vercel.app/'
    })

    return axiosSimple
}

export default useAxios