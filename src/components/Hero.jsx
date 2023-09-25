import React from 'react'
import style from '../style'
import { robot, discount } from '../assets/index'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${style.paddingY}`}>
    <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} />
        <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
      </div>
    </div>
  </section>
)

export default Hero