import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {

    let color ={marginLeft:'20px'}

    const {image,name,price,country} =props.pro

    return (
        <div className="box-container">
          
          <div className ="new" >

              <img style={{width:'250px',height:"350px"}} src={image} alt=""/>
              
          </div >

          <div className='old'>

          
          <h3 style={color}>Name : {name}</h3>

          <p style={color}>price ${price}</p> 
          <h3 style={color}><small>country : {country}</small></h3>
           

          <button className="name_button"  onClick={()=> 
          
          props.click_name(props.pro)}


               style={color}><FontAwesomeIcon 
               icon={faShoppingCart} />
 add to card</button>
              
          </div>
          
            
        </div>
    );
};

export default Player;