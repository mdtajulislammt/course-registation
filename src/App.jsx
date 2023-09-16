
import { useState } from 'react';
import './App.css'
import Cards from './assets/Component/Cards';
import CartContainer from './assets/Component/CartContainer';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './Libeary/Toast';
import { ToastContainer } from 'react-toastify';


function App() {
 
  const [addItem, setAddItem] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0)

  const selectAddItem = card =>{
    const isexist = addItem.find((item)=> item.id == card.id)
    let count = card.credit;
    let total = card.price;


    if(isexist){
     
      return Toast();
      

    }
     else{

        addItem.forEach(item=>{
          count += item.credit
        })
        addItem.forEach(item=>{
          total += item.price
        })

        const totalRemaining = 20 - count;
        if(count > 20){
          return Toast("🚨  You don't have enough credit hour");
        }else{
          setTotalCredit(count);
          
          
          setRemaining(totalRemaining);
        setTotalPrice(total);
        setAddItem([...addItem,card])
        }
        
      }
  }

  return (
    <>
      <header className=' mt-7'>
        <h1 className=' text-4xl font-bold text-center'>Course Registration</h1>
      </header>
      <main className='flex justify-between px-10  mt-14  '>
        <div className=''>
        <Cards selectAddItem={selectAddItem}></Cards>
        </div>
        <div className=' bg-white h-[480px] flex-1 sticky top-3 p-5   rounded-xl'>
        <CartContainer 
        totalPrice={totalPrice}
        addItem={addItem}
        totalCredit={totalCredit}
        remaining={remaining}

        ></CartContainer>
        <ToastContainer/>
        </div>
      </main>
    </>
  )
}

export default App
 