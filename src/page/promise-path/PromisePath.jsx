import React from 'react'
import PromiseHero from '../../component/promise-hero/PromiseHero'
import PromiseContent from '../../component/promise-content/PromiseContent'
import PromiseFeatures from '../../component/promise-features/PromiseFeatures'
import PromiseEnroll from '../../component/promise-enroll/PromiseEnroll'

const PromisePath = () => {
  return (
    <main>
      <PromiseHero />
      <PromiseContent />
      <PromiseFeatures />
      <PromiseEnroll />
    </main>
  )
}

export default PromisePath