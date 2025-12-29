import { star } from "../assets/icons"

const ReviewCard = ({customerName,imgURL,rating,feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img 
        src={imgURL}
        alt="customer" 
        className="rounded-full object-cover w-[120px] h-[120px] contrast-95 saturate-90 blur-[0.2px]"
      />  
      <p className="mt-6 max-w-sm text-center info-text ">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img 
        src= {star}
        width={24}
        height={24}
        className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">
          {rating}
        </p>
      </div>
        <h4 className="mt-1 font-palanquin text-3xl text-center font-bold">
          {customerName}
        </h4>
    </div>
  )
}


export default ReviewCard