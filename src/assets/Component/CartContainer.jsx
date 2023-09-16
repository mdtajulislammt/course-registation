import PropTypes from "prop-types";

const CartContainer = ({ addItem, remaining, totalCredit, totalPrice }) => {
  return (
    <>
      <h1 className=" text-lg font-bold mb-5 text-[#2F80ED] ">
        Credit Hour Remaining {remaining} hr
      </h1>
      <hr />
      <h1 className=" text-xl mt-4 mb-8 font-bold">Course Name :-</h1>
      <div className=" list-decimal ml-2  text-gray-500 mb-7">
        {addItem.map((item, idx) => (
          <li className="text-sm mb-3 font-bold" key={idx}>
            {item.title}
          </li>
        ))}
      </div>
      <hr />
      <h2 className=" text-lg font-medium mt-4 mb-4">
        Total Credit Hour : {totalCredit}
      </h2>
      <hr />

      <h2 className=" text-lg font-semibold mt-4 ">
        Total Price : {totalPrice} USD
      </h2>
    </>
  );
};

CartContainer.propTypes = {
  addItem: PropTypes.array,
  totalCredit: PropTypes.number,
  remaining: PropTypes.number,
  totalPrice: PropTypes.number
};
export default CartContainer;
