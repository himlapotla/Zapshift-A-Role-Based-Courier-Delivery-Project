import React from 'react'
import UseAuth from '../hooks/UseAuth'
import Loading from '../pages/Shared/Loading'
import { Navigate } from 'react-router'

const PrivateRoutes = ({ children }) => {

    const {user, loading} = UseAuth()

    if(loading){
        return <Loading> </Loading>
    }

    if(!user){
        return <Navigate to={'/login'}> </Navigate>
    }
    
    return children
}

export default PrivateRoutes