import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaFacebook } from 'react-icons/fa'

import brnd1 from '../../../assets/brands/amazon_vector.png'
import brnd2 from '../../../assets/brands/amazon.png'
import brnd3 from '../../../assets/brands/casio.png'
import brnd4 from '../../../assets/brands/moonstar.png'
import brnd5 from '../../../assets/brands/randstad.png'
import brnd6 from '../../../assets/brands/star.png'
import brnd7 from '../../../assets/brands/start_people.png'

const Brand = () => {
    return (
        <div className='pb-13 w-8/12 mx-auto '>
            <Marquee pauseOnHover={true} className='flex gap-7'>
                <div className='flex gap-13'>
                    <img src={brnd1} alt="" />
                    <img src={brnd2} alt="" />
                    <img src={brnd3} alt="" />
                    <img src={brnd4} alt="" />
                    <img src={brnd5} alt="" />
                    <img src={brnd6} alt="" />
                    <img src={brnd7} alt="" />
                </div>
            </Marquee>
        </div>
    )
}

export default Brand