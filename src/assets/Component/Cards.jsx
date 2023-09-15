import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import PropTypes from 'prop-types';


const Cards = ({selectAddItem}) => {
     const [cards, setCards] = useState([])

     useEffect(()=>{
          fetch('data.json')
          .then(res => res.json())
          .then(data => setCards(data))
     },[])
     return (
          <div className=" grid grid-cols-3 gap-4">
               {
                    cards.map(card=>
                         <Card 
                         key={card.id} 
                         card={card}
                          selectAddItem={selectAddItem} 
                          ></Card>
                    )
               }
          </div>
     );
};

Cards.propTypes = {
     selectAddItem: PropTypes.func
}

export default Cards;