import React from 'react'
import style, {layout} from '../style'
import {card} from '../assets/index'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.sectionReverse}>
    <div className={`${layout.sectionImg} flex-col`}>
      <img src={card} className='w-[600px]'/>
    </div>

    <div className={`${layout.sectionInfo} sm:ml-16 ml-0`}>
      <h2 className={`${style.heading2} mb-[24px]`}>Easily control your <br className='sm:block hidden'/>billing & invoicing.</h2>
      <p className={`${style.paragraph} mb-[48px]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      <Button />
    </div>
  </section>
  )
}

export default CardDeal