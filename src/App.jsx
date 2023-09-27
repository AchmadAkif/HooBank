import React from 'react'
import style from './style'
import {Billing, Business, Button, CardDeal, CTA, FeedbackCard, Footer, GetStarted, Hero, Navbar, Sponsor, Stats,Testimonial} from './components'


const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Sponsor />
          <CTA />
        </div>
      </div>

      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          Footer
        </div>
      </div>         
    </div>
  )
}

export default App