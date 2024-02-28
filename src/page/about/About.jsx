import React from 'react'
import AboutHero from '../../component/about-hero/AboutHero'
import AboutOurStory from '../../component/about-our-story/AboutOurStory'
import AboutValues from '../../component/about-values/AboutValues'
import AboutOffer from '../../component/about-offer/AboutOffer'
import AboutTeam from '../../component/about-team/AboutTeam'
import AboutCTAVolunteer from '../../component/about-cta/AboutCTAVolunteer'

const About = () => {
  return (
    <main>
      <AboutHero />
      <AboutOurStory />
      <AboutValues />
      <AboutOffer />
      <AboutTeam />
      <AboutCTAVolunteer />
    </main>
  )
}

export default About