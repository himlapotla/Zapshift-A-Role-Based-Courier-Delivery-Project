import React, { use } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ReviewCard from './ReviewCard'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise)
  console.log((reviews))

  return (
    <div className='pb-20'>
      <div>
        <p className='text-3xl text-center pb-1 font-bold'> Our Reviews </p>
        <p className='text-xl text-center pb-13 w-8/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero nulla hic accusamus neque natus ullam tempore esse dignissimos numquam obcaecati corrupti.</p>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'4'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 700,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}

        loop = {true}
        autoplay={{
          delay : 2000,
          disableOnInteraction : false
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >

        {
          reviews.map(review => <SwiperSlide key={review.id}>
            <ReviewCard review={review}> </ReviewCard>
          </SwiperSlide>)
        }

      </Swiper>

    </div>
  )
}

export default Reviews