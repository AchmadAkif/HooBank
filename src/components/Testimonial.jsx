import React from 'react'
import style, {layout} from '../style'
import { feedback } from '../static/text'
import { quotes } from '../assets'

const TestimonialCard = ({content, title, name, img}) => {
  return (
    <div className='flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} className='w-[42px] h-[27px] object-contain'/>
      <p className='font-poppins font-normal text-[18px] text-white leading-[32px] my-10'>{content}</p>
      <div className='flex flex-row'>
        <img src={img} alt="profile" className='w-[48px] h-[48px] rounded-full'/>
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] text-white leading-[32px]'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] text-dimWhite leading-[24px]'>{title}</p>
        </div>
      </div>
    </div>
  )
}

const Testimonial = () => {
  return (
    <section className='flex flex-1 flex-col font-poppins sm:py-16 py-6'>
      <div className='absolute z-[0] w-[60%] h-[60%] right-[1%] rounded-full blue__gradient' />

      <div className='flex md:flex-row flex-col items-center sm:mb-0 mb-10'>
        <h1 className={style.heading2}>What people are <br />saying about us</h1>
        <p className={style.paragraph}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map( (feedback, index) => (
          <TestimonialCard key={feedback.id} {...feedback} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Testimonial