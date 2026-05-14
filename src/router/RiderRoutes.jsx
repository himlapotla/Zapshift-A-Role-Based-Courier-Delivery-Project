import React, { Children } from 'react'
import useRole from '../hooks/useRole'
import RiderForbidden from '../pages/Shared/RiderForbidden'

const RiderRoutes = ({ children }) => {

    const { userRole } = useRole()

    if (userRole !== 'rider') {
        return <RiderForbidden> </RiderForbidden>
    }

    return children
}

export default RiderRoutes