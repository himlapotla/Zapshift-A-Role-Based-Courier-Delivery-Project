import React from 'react'
import UseAuth from '../hooks/UseAuth'
import Loading from '../pages/Shared/Loading'
import { Navigate, useLocation } from 'react-router'

const PrivateRoutes = ({ children }) => {

    const {user, loading, setUserLocation} = UseAuth()
    const location = useLocation()
    console.log(location)
    // const tracLocation = location.pathname
    // setUserLocation(tracLocation)

    if(loading){
        return <Loading> </Loading>
    }

    if(!user){
        return <Navigate state={location.pathname} to={'/login'}> </Navigate>
    }
    
    return children
}

export default PrivateRoutes