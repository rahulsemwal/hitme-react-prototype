import React from 'react';
import '../FoodBox/FoodBox.css'
const ReceipeCard = (props) => {
    console.log(props);
    return (<div className="column">
                <div className="receipe-card">
                    <img src={props.rList.image_url} alt="Denim Jeans" className="receipe-image"></img>
                    <h1>{props.rList.title}</h1>
                </div>
            </div>) 
       };
export default ReceipeCard;