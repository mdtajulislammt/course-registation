import { BsCurrencyDollar } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import PropTypes from "prop-types";

const Card = ({ card, selectAddItem }) => {
  const { title, image, description, price, credit } = card;

  return (
    <>
      <div className=" bg-white p-3 h-[430px] w-[300px]  rounded-xl ">
        <img src={image} alt="" className=" m-auto " />
        <h2 className=" text-base font-semibold mt-5 mb-4">{title}</h2>
        <p className=" text-sm font-medium h-[70px] text-gray-500 ">{description}</p>
        <div className=" flex justify-center  gap-4 items-center mt-7">
          <div className=" flex  items-center ">
            <span className=" text-xl mr-4">
              <BsCurrencyDollar />
            </span>
            <p className=" text-sm font-medium text-gray-500">
              
              Price : {price}
            </p>
          </div>
          <div className=" flex  items-center">
            <span className=" text-xl mr-4">
              <BsBook />
            </span>
            <p className=" text-sm font-medium text-gray-500">
              Credit : {credit}hr
            </p>
          </div>
        </div>
        <button
          onClick={() => selectAddItem(card)}
          className=" mt-7 font-semibold w-full p-2 bg-[#2F80ED] hover:text-black hover:bg-[#316cb9] text-white rounded-lg"
        >
          Select
        </button>
      </div>
    </>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  selectAddItem: PropTypes.func,
};

export default Card;
