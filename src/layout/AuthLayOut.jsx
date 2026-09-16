import React from 'react'
import Logo from '../components/Logo/Logo'
import { Link, Outlet } from 'react-router'
import authImg from '../assets/authImage.png'

const AuthLayOut = () => {

    return (
        <div>

            {/* <div className='w-6/12 mx-auto pt-8'>

                <Link to={'/'} className="btn btn-ghost text-xl"> <Logo> </Logo> </Link>

                <div className='flex items-center py-12'>
                    <div className='flex-1'>
                        <Outlet> </Outlet>
                    </div>
                    <div className='flex-1'>
                        <img src={authImg} alt="" />
                    </div>
                </div>
            </div> */}

            <div className='w-11/12 md:w-10/12 lg:w-6/12 mx-auto pt-8'>

                <Link to={'/'} className="btn btn-ghost text-xl"> <Logo /> </Link>

                <div className='flex flex-col md:flex-row items-center justify-center gap-8 py-12'>
                    <div className='flex-1 w-full'>
                        <Outlet />
                    </div>
                    <div className='flex-1 w-full'>
                        <img src={authImg} alt="" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AuthLayOut