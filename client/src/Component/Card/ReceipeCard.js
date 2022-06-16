import React from 'react';
import '../FoodBox/FoodBox.css'
const ReceipeCard = (props) => {
    // console.log(props);
    return (<div className="column">
                <div className="receipe-card">
                    <img src={props.rList.image_url} alt="Denim Jeans" className="receipe-image"></img>
                    <h1 className="recipes__title">{ props.rList.title.length < 20 ? `${props.rList.title}` : `${props.rList.title.substring(0, 25)}...` }</h1>
                    <p className="recipes__subtitle">Publisher:<span>{props.rList.publisher}</span></p>
                    <button className="recipe_buttons">View Recipe</button>
                </div>
            </div>)
       };
export default ReceipeCard;
