import React from 'react'
import useRole from '../../../hooks/useRole'
import Loading from '../../Shared/Loading'
import AdminDashboardHome from './AdminDashboardHome'
import RiderDashboardHome from './RiderDashboardHome'
import UserDashboardHome from './UserDashboardHome'

const DashboardHome = () => {

    const { userRole, roleLoad } = useRole()
    
    if (roleLoad) {
        return <Loading></Loading>
    }
    if (userRole === 'admin') {
        return <AdminDashboardHome> </AdminDashboardHome>
    }
    if (userRole === 'admin') {
        return <RiderDashboardHome> </RiderDashboardHome>
    }
    else {
        return <UserDashboardHome> </UserDashboardHome>
    }

}

export default DashboardHome