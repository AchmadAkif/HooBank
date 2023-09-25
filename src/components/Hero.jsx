import React from 'react'
import style from '../style'
import GetStarted from './GetStarted'
import { robot, discount } from '../assets/index'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${style.paddingY} font-poppins`}>
    <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} />
        <p className={`${style.paragraph} ml-[13px]`}><span className='text-white'>20% </span>DISCOUNT FOR <span className='text-white'>1 MONTH </span>ACCOUNT</p>
      </div>

      <div className='flex ss:flex-row flex-col items-center w-full mb-5'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] text-white mb-5'>The Next<br /><span className='text-gradient'>Generation</span><br />Payment Method.</h1>
        <GetStarted />
      </div>

      <p className={`${style.paragraph}`}>Our team experts uses a methodology to identify <br className />the credit cards most likely to fit your needs. <br className />We examine annual percentage rates, annual fees.</p>

    </div>
    <img src={robot} alt="robot-hand" className='w-[669px]' />
  </section>
)

export default Hero