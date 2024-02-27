import React from 'react'
import HomeHero from '../../component/home-hero/HomeHero'
import HomeOurStory from '../../component/home-our-story/HomeOurStory'
import HomeWhoWeServe from '../../component/home-who-we-serve/HomeWhoWeServe'

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HomeOurStory />
      <HomeWhoWeServe />
    </main>
  )
}

export default Home