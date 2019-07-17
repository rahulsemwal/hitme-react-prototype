import React , {Component} from 'react';
import receipe from './Receipe';
import ReceipeCard from '../Card/ReceipeCard';
class FoodBox extends Component {
  render(){
    const receipeList = receipe.recipes.map((data,index)=>{
        return <ReceipeCard key = {index} rList={data}/>
    });
    // console.log("receipr",receipe);
    return(<div className="receipe-row">{receipeList}</div>);
  }
}
export default FoodBox;
