import {useState} from 'react'
import { close, logo, menu } from '../assets/index'
import { navLinks } from '../static/text'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='Hoobank-logo' className='w-[114px] h-[32px]'/>

      <ul className='sm:flex hidden justify-end flex-1 gap-[56px]'>
        {navLinks.map( (e, index) => (
          <li key={e.id} className='font-poppins text-[16px] text-white'>
            <a href={`#${e.id}`}>
              {e.title}
            </a>
          </li>
        ))}
      </ul>
    
      {/* Mobile navbar */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu-button" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(prev => !prev)}/>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='flex flex-col gap-[20px]'>
        {navLinks.map( (e, index) => (
          <li key={e.id} className='font-poppins text-[16px] text-white'>
            <a href={`#${e.id}`}>
              {e.title}
            </a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar