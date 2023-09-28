import React from 'react'
import style, {layout} from '../style'
import { feedback } from '../static/text'
import { quotes } from '../assets'

const TestimonialCard = ({content, title, name, img}) => {
  return (
    <div className='w-[370px] h-[395px] feature-card py-[60px] px-[40px] rounded-[20px]'>
      <img src={quotes} />
      <p className='text-dimWhite text-[18px]'>{content}</p>
      <div className='flex flex-1 space-x-5 items-center'>
        <img src={img} className='w-[48px]' />
        <div>
          <p className='text-white text-[20px]'>{name}</p>
          <p className='text-dimWhite text-[16px]'>{title}</p>
        </div>
      </div>
    </div>
  )
}

const Testimonial = () => {
  return (
    <section className='flex flex-1 flex-col font-poppins sm:py-16 py-6'>
      <div className='flex md:flex-row flex-col items-center sm:mb-0 mb-10'>
        <h1 className={style.heading2}>What people are <br />saying about us</h1>
        <p className={style.paragraph}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    
      <div className='flex md:flex-row flex-col justify-center items-center md:space-x-10'>
        {feedback.map( (feedback, index) => (
          <TestimonialCard key={feedback.id} {...feedback} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Testimonial