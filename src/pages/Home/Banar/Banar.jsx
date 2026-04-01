import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import bnrimg1 from '../../../assets/banner/banner1.png'
import bnrimg2 from '../../../assets/banner/banner2.png'
import bnrimg3 from '../../../assets/banner/banner3.png'

const Banar = () => {
    return (
        <>
            <div className='relative'>
                <Carousel autoPlay={true} infiniteLoop={true}>
                    <div>
                        <img src={bnrimg1} />
                    </div>
                    <div>
                        <img src={bnrimg2} />
                    </div>
                    <div>
                        <img src={bnrimg3} />
                    </div>
                </Carousel>


                
                <div className='absolute bottom-[30%] md:bottom-[20%] left-[6.5%] flex gap-2'>

                    <button className='bg-[#83a325] px-3 py-1.5 md:px-6 md:py-3 rounded-lg text-white font-bold'> Track Your Parcle </button>
                    <button className='bg-[#83a325] px-3 py-1.5 md:px-6 md:py-3 rounded-lg text-white font-bold'> Be a Rider </button>
                </div>
            </div>

        </>
    )
}

export default Banar