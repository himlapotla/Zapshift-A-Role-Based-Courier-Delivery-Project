import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext/AuthContext'

const UseAuth = () => {
    const authInfoo = useContext(AuthContext)
    return authInfoo
}

export default UseAuth
