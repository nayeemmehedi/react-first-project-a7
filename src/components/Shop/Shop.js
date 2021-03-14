import React, { useState } from 'react';
import './Shop.css'
import fakaData from '../fakeData'
import Product from '../Product/Player';
import Card from '../Card/Card';


const Shop = () => {

    const nameClick =(newvalue)=>{


      let  newValue =[...card,newvalue]
      setcard(newValue)
    }

    const [card, setcard] = useState([])
    
     

    
    const [count, setcount] = useState(fakaData)



    return (
        <div className="shop-container">

            <div className="first-child">

                {count.map(value => <Product pro={value} click_name ={nameClick}>  </Product>)}

                

            </div>

            <div className="secound child">

             <Card card={card}></Card>

            </div>



        </div>
    );
};

export default Shop;