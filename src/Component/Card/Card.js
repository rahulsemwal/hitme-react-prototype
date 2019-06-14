import React from 'react';
const Card = () => {
    return ( 
    	<article className="card">
    		<header>
    			<img className="thumbnail" src="https://www.wellnesspetfood.com/sites/default/files/styles/blog_feature/public/media/images/happy-cat-blog-cover.jpg" alt="Image can't be fetched"/>
    			<h3 className="heading">The Mystery of the Happy Cat</h3>
    		</header>
    		<section>
    			<p>If you’re a cat parent, then you know cats are very good at keeping us guessing. Are they happy, annoyed, secretly plotting our demise? Maybe they’re just sleepy.</p>
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
                header>.thumbnail{
                    height: auto;
                    max-width:100%;
                    opacity: .95;
                    overflow: hidden;
                    transition: all .2s ease-in-out;
                }
                header>.thumbnail:hover,
                .card:hover header>.thumbnail {
                  opacity: 1;
                }
                header h3.heading, section, footer{
                    padding: 0px 10px;
                }
                section{
                    min-height: 150px;
                }
                footer{
                    border-top: 1px solid #eee;;
                }
            `}
            </style>
        </article>
    );
}

export default Card;