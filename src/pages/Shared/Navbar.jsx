import React from 'react'
import Logo from '../../components/Logo/Logo'
import { Link, NavLink } from 'react-router'
import UseAuth from '../../hooks/UseAuth'
import useRole from '../../hooks/useRole'

const Navbar = () => {

    const { user, logOutUser } = UseAuth()
    const { userRole } = useRole()

    const Links = <>
        <li> <NavLink to={'/about'}> About Us </NavLink> </li>
        <li> <NavLink to={'/send-parcel'}> Send Parcel </NavLink> </li>
        <li> <NavLink to={'/coverage'}> Coverage </NavLink> </li>
        {


            userRole === 'user' && <>
                <li> <NavLink to={'/dashboard/my-parcels'}> My Parcels </NavLink> </li>
                <li> <NavLink to={'/rider'}> Be a Rider </NavLink> </li>
                <li> <NavLink to={'/dashboard'}> User Dashboard </NavLink> </li>
            </>

        }
        {
            userRole === 'admin' && <>
                <li> <NavLink to={'/dashboard'}> Admin Dashboard </NavLink> </li>
            </>
        }
        {
            userRole === 'rider' && <>
                <li> <NavLink to={'/dashboard'}> Rider Dashboard </NavLink> </li>
            </>
        }
    </>

    const handleOut = () => {
        logOutUser()
            .then()
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='pb-5'>
            <div className="navbar bg-base-100 shadow-lg rounded-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-green-400 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {Links}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl"> <Logo> </Logo> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <a onClick={handleOut} className="btn">Log Out</a> :
                            <Link to={'/login'} className="btn">Log In</Link>
                    }

                    <Link to={'/rider'} className='btn ml-2 bg-[#caeb66]'> Be a Rider </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
