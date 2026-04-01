import React from 'react'
import Logo from '../components/Logo/Logo'
import { Outlet } from 'react-router'
import authImg from '../assets/authImage.png'

const AuthLayOut = () => {

    return (
        <div>

            <div className='w-6/12 mx-auto'>
                <Logo> </Logo>

                <div className='flex items-center py-12'>
                    <div className='flex-1'>
                        <Outlet> </Outlet>
                    </div>
                    <div className='flex-1'>
                        <img src={authImg} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AuthLayOut