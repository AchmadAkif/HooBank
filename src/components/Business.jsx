import {features} from '../static/text';
import style, {layout} from '../style';
import Button from './Button'

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${style.heading2} mb-[24px]`}>You do the business, <br className='sm:block hidden'/>We'll handle the money.</h2>
        <p className={`${style.paragraph} mb-[48px]`}>With the right credit card, you can improve your financial life <br className='sm:block hidden' />by building credit, earning rewards and saving money. But <br className='sm:block hidden'/>with hundreds of credit cards on the market</p>
        <Button />
      </div>

      <div className={`flex flex-col justify-between font-poppins ${style.paddingY} mt-[50px]`}>
        {features.map( e => (
          <div key={e.id} className='flex text-white mb-[30px] items-center'>
            <div className='flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue mr-[20px]'>
              <img src={e.icon} alt="features-icon" className='sm:w-[38px] sm:h-[38px]'/>
            </div>
            <div className='w-[366px]'>
              <p className='sm:text-[18px] text-[16px] mb-[8px] font-semibold'>{e.title}</p>
              <p className='sm:text-[16px] text-[14px] text-dimWhite'>{e.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Business