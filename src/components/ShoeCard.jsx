const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  // Debug what we receive
  // console.log("ShoeCard received imgURL:", imgURL);
  // console.log("ShoeCard received bigShoeImg:", bigShoeImg);

  // Add error handling for undefined imgURL
  // if (!imgURL) {
  //   console.error("ShoeCard: imgURL is undefined");
  //   return <div className="w-40 h-40 bg-gray-200 rounded-xl flex items-center justify-center">No Image</div>;
  // }

  // Add error handling for missing properties
  // if (!imgURL.bigShoe || !imgURL.thumbnail) {
  //   console.error("ShoeCard: Missing bigShoe or thumbnail property", imgURL);
  //   return <div className="w-40 h-40 bg-gray-200 rounded-xl flex items-center justify-center">Invalid Image Data</div>;
  // }

  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe && changeBigShoeImage) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div 
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='shoe collection'
          width={127}
          height={103}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;