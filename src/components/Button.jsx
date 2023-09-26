import style from '../style'

const Button = () => {
  return (
    <div className={`${style.flexCenter} bg-blue-gradient w-[170px] h-[64px] rounded-xl cursor-pointer`}>
      <p className='font-poppins font-semibold' >Get Started</p>
    </div>
  )
}

export default Button