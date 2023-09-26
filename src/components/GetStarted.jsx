import React from 'react'
import style from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${style.flexCenter} md:w-[140px] w-full md:h-[140px] ss:rounded-full rounded-full border-2 border-immerBlue cursor-pointer text-gradient`}>
      <div>
        <p className='flex gap-[5px]'>Get <img src={arrowUp}/></p>
        <p>Started</p>
      </div>
    </div>
  )
}

export default GetStarted