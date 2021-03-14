import React from 'react';

const Card = (props) => {
    
    const card=props.card
    

    

        let total = card.reduce((total,prod)=>total +prod.price,0) 
        let name = card.reduce((name ,value)=> name +" *"+ value.name,"")

       
    

    return (
        <div>
            <h1>Player..</h1>
            <h3>Player Order:  {card.length} </h3>
            <small>If you have huge money click again and buy again same player.</small>
            <br/><br/>
            <h1>Name : {name}</h1>
            <hr/>
             <br/>
            <h2>Total price :$ {total}</h2>
            <hr/>






            <ul>


            </ul>









        </div>
    );
};


export default Card;