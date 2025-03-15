import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import RotatingCube from '../components/RotatingCube'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import { Button } from '@/components/ui/button'
import AxiosInstance from '@/lib/AxiosInstance'


const Home = () => {
  return (
    <div>
      {/* <RotatingCube/> */}

      
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home