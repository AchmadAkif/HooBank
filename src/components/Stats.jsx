import React from 'react'
import style from '../style'
import { stats } from '../static/text'

const Stats = () => {  
  return (
    <section className={`flex md:flex-row flex-col ${style.paddingY} font-poppins`}>
      <div className='flex ss:flex-row flex-col flex-1 justify-between items-center px-6 ss:gap-0 gap-[50px]'>
        {stats.map( e => (
          <div className='flex ss:flex-row flex-col font-poppins items-center ss:gap-[25px] gap-0'>
            <p className='text-white text-[40px] font-semibold'>{e.value}</p>
            <p className='text-gradient text-[20px]'>{e.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats