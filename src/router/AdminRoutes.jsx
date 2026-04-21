import React from 'react'
import useRole from '../hooks/useRole'
import UseAuth from '../hooks/UseAuth'
import Forbidden from '../pages/Shared/Forbidden'

const AdminRoutes = ({ children }) => {

    const { userRole } = useRole()

    if(userRole !== 'admin') {
        return <Forbidden> </Forbidden>
    }

    return children
}

export default AdminRoutes