import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/hero-section/heroSection'
import Service from '../../components/service/Service'

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <Service />
    </Layout>
  )
}

export default Home