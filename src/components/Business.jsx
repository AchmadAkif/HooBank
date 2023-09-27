import {features} from '../static/text';
import style, {layout} from '../style';
import Button from './Button'

const FeatureCard = ({icon, title, content, index}) => {
  return (
    <div className={`flex flex-row items-center p-6 rounded-[20px] ${index !== features.length -1 ? 'mb-6' : 'mb-0'} feature-card font-poppins`}>
      <div className={`w-[64px] h-[64px] rounded-full ${style.flexCenter} bg-dimBlue`}>
        <img src={icon} className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex flex-col flex-1 ml-3'>
        <h4 className='text-[18px] text-white font-semibold mb-[8px]'>{title}</h4>
        <p className='text-dimWhite leading-[24px]'>{content}</p>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <section className={layout.section} id='features'>
      <div className={layout.sectionInfo}>
        <h2 className={`${style.heading2} mb-[24px]`}>You do the business, <br className='sm:block hidden'/>We'll handle the money.</h2>
        <p className={`${style.paragraph} mb-[48px]`}>With the right credit card, you can improve your financial life <br className='sm:block hidden' />by building credit, earning rewards and saving money. But <br className='sm:block hidden'/>with hundreds of credit cards on the market</p>
        <Button />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map( (feature, index) => (
          <FeatureCard key={features.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business