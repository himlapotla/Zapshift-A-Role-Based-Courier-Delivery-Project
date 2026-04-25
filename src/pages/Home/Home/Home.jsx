import React from 'react'
import Banar from '../Banar/Banar'
import ServicesSection from '../ServicesSection/ServicesSection'
import Brand from '../brand/brand'
import Reviews from '../Reviews/Reviews'
import useRole from '../../../hooks/useRole'

const reviewsPromise = fetch('/reviews.json')
.then(res => res.json())

const Home = () => {
  const {userRole} = useRole()

  return (
    <div>
      <p>role -- {userRole} </p>

        <Banar> </Banar>

        <ServicesSection> </ServicesSection>

        <Brand> </Brand>

        <Reviews reviewsPromise={reviewsPromise}> </Reviews>
    </div>
  )
}

export default Home