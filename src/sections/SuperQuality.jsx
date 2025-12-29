import { arrowRight } from '../assets/icons'
import {shoe8} from '../assets/images'
import Button from '../components/Button'
import { thumbnailBackground } from '../assets/images';


const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-end
      max-lg:flex-col gap-10 w-full max-container
      "
    >
      <div className="flex flex-col flex-1">
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
         <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button 
            label='View details'
          />
        </div>
       </div>

<div className='relative flex flex-1 justify-center items-center bg-primary bg-hero bg-cover bg-center 
                rounded-xl min-h-[500px] w-full max-w-[700px] overflow-hidden'>
  
  <img
    src={thumbnailBackground}
    alt='thumbnail background'        
    className='absolute inset-0 w-full h-full object-cover'
  />


  <img
    src={shoe8}
    alt='product details'
    className='relative z-10 w-full h-auto object-contain 
               scale-110 -rotate-[15deg] 
               transition-transform duration-500 hover:scale-125'
  />
</div>

    </section>
  )
}

export default SuperQuality