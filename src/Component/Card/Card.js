import React from 'react';
import './Card.css'
const Card = (props) => {
  // console.log(props);
    return (
    	<article className="card">
    		<header>
    			<img className="thumbnail" src={props.article.urlToImage} alt="Not Available"/>
    			<h3 className="heading">{props.article.title}</h3>
          <small className="source">By: {props.article.source}</small>
    		</header>
    		<section>
    			<p>{props.article.description}</p>
    		</section>
    		<footer>
    			<p>I am footer</p>
    		</footer>
      </article>
    );
}

export default Card;
