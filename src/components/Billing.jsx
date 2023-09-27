import React from 'react'
import style, {layout} from '../style'
import {bill, google, apple} from '../assets/index'

const Billing = () => {
  return (
  <section id='features' className={layout.section}>
    <div className={`${layout.sectionImg} flex-col`}>
      <img src={bill} />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${style.heading2} mb-[24px]`}>Easily control your <br className='sm:block hidden'/>billing & invoicing.</h2>
      <p className={`${style.paragraph} mb-[48px]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className='flex'>
        <img src={apple} />
        <img src={google} />
      </div>
    </div>
  </section>
  )
}

export default Billing