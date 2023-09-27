import React from 'react'
import style, {layout} from '../style'
import {bill, google, apple} from '../assets/index'

const Billing = () => {
  return (
  <section className={`${layout.section} sm:mb-0 mb-16`}>
    <div className={`${layout.sectionImgReverse} flex-col`}>
      <img src={bill} className='w-[600px]'/>
    </div>

    <div className={`${layout.sectionInfo} sm:ml-16 ml-0`}>
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