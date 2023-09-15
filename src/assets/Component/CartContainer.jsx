import PropTypes from 'prop-types';


const CartContainer = ({addItem,remaining,totalCredit,totalPrice}) => {
     
     return (
          <>
              <div className=" bg-white h-[500px] sticky top-3 p-5  rounded-xl">
               <h1 className=" text-xl font-bold mb-5 text-[#2F80ED] ">Credit Hour Remaining {remaining} hr</h1>
               <hr />
               <h1 className=" text-2xl mt-4 mb-8 font-bold">Course Name</h1>
               <div className="list-decimal ml-2 text-xl font-normal text-gray-500 mb-7" >
                    
                    {
                         addItem.map((item,idx)=>
                         <li  className='text-sm mb-3 font-bold' key={idx}>{item.title}</li >
                              )
                    }
                    
               </div>
               <hr />
               <h2 className=" text-xl font-medium mt-4 mb-4">Total Credit Hour : {totalCredit}</h2>
               <hr />

               <h2 className=" text-xl font-semibold mt-4 ">Total Price : {totalPrice} USD</h2>
              </div>
          </>
     );
};


CartContainer.propTypes={
     addItem : PropTypes.array,
     totalCredit:PropTypes.number,
     remaining:PropTypes.number,
     totalPrice:PropTypes.number
     
}
export default CartContainer;