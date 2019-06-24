import React from 'react';
const Card = (props) => {console.log(props);
    return (
    	<article className="card">
    		<header>
          {/*<img className="thumbnail" src="https://www.wellnesspetfood.com/sites/default/files/styles/blog_feature/public/media/images/happy-cat-blog-cover.jpg" alt="Image can't be fetched"/>*/}
    			<img className="thumbnail" src={props.article.urlToImage} alt="Image can't be fetched"/>
    			<h3 className="heading">{props.article.title}</h3>
          <small className="source">By: {props.article.source.name}</small>
    		</header>
    		<section>
    			<p>{props.article.description}</p>
    		</section>
    		<footer>
    			<p>I am footer</p>
    		</footer>
            <style jsx="true">
            {`
                .card{
                    text-align:left;
                    background:#FFF;
                    display: inline-block;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,.15), 0 4px 6px rgba(0,0,0,0.23);
                    margin: 10px;
                    position: relative;
                    margin-bottom: 20px;
                    transition: all .2s ease-in-out;
                }
                .card:hover{
                    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                    margin-bottom: 25px;
                }
                .card header>.thumbnail{
                    height: auto;
                    width:100%;
                    opacity: .95;
                    overflow: hidden;
                    transition: all .2s ease-in-out;
                }
                .card header>.thumbnail:hover,
                .card:hover header>.thumbnail {
                  opacity: 1;
                }
                .card header h3.heading, header small.source, section, footer{
                    padding: 0px 10px;
                }
                .card header small.source{
                    position: relative;
                    top: -20px;
                    font-weight: 700;
                }
                .card section{
                    min-height: 150px;
                }
                .card section>p{
                    margin-top:0px;
                }
                .card footer{
                    border-top: 1px solid #eee;;
                }
            `}
            </style>
        </article>
    );
}

export default Card;
