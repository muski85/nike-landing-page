import { motion } from 'framer-motion';
import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="flex flex-1 flex-col w-full max-sm:w-full cursor-pointer"
    >
      <div className="overflow-hidden rounded-xl bg-white p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
        <motion.img
          src={imgURL}
          alt={name}
          className="w-[282px] h-[282px] object-contain"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className='font-monserrat text-xl text-slate-gray'>(4.5)</p>
      </div>

      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </motion.div>
  );
};

export default PopularProductCard;