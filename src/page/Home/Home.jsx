import React from 'react'
import HomeHero from '../../component/home-hero/HomeHero'
import HomeOurStory from '../../component/home-our-story/HomeOurStory'
import HomeWhoWeServe from '../../component/home-who-we-serve/HomeWhoWeServe'
import HomeCTAVolunteer from '../../component/home-cta-volunteer/HomeCTAVolunteer'
import HomePrograms from '../../component/home-programs/HomePrograms'
import HomePartners from '../../component/home-partners/HomePartners'
import HomeCTAGeneral from '../../component/home-cta-general/HomeCTAGeneral'
import HomeLeadership from '../../component/home-leadership/HomeLeadership'

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HomeOurStory />
      <HomeWhoWeServe />
      <HomeCTAVolunteer />
      <HomePrograms />
      <HomePartners />
      <HomeLeadership />
      <HomeCTAGeneral />
    </main>
  )
}

export default Home