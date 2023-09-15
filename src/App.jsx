
import { useState } from 'react';
import './App.css'
import Cards from './assets/Component/Cards';
import CartContainer from './assets/Component/CartContainer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      
    return alert('Booked')
      
    
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
          return toast.error("fill")
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
      <main className='flex justify-between px-10  mt-14'>
        <Cards selectAddItem={selectAddItem}></Cards>
        <CartContainer 
        totalPrice={totalPrice}
        addItem={addItem}
        totalCredit={totalCredit}
        remaining={remaining}

        ></CartContainer>
      </main>
    </>
  )
}

export default App
