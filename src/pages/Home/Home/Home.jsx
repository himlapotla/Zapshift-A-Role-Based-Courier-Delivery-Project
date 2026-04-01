import React from 'react'
import Banar from '../Banar/Banar'
import ServicesSection from '../ServicesSection/ServicesSection'
import Brand from '../brand/brand'
import Reviews from '../Reviews/Reviews'

const reviewsPromise = fetch('/reviews.json')
.then(res => res.json())

const Home = () => {
  return (
    <div>
        <Banar> </Banar>

        <ServicesSection> </ServicesSection>

        <Brand> </Brand>

        <Reviews reviewsPromise={reviewsPromise}> </Reviews>
    </div>
  )
}

export default Home