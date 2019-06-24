import React from 'react'

const NoNetworkFound = () => (<article className="card-no-nework-found">
								<header><h3>No network found</h3></header>	
								<section>
									<p>May be you are not connected with internet. Last upadte below. </p>
								</section>
								<style jsx="true">{`
									.card-no-nework-found{
										text-align:left;
					                    background:#FFF;
					                    display: block;
					                    box-shadow: 0 4px 8px 0 rgba(0,0,0,.15), 0 4px 6px rgba(0,0,0,0.23);
					                    margin: 10px 10px 0px 10px;
					                    position: relative;
					                    transition: all .2s ease-in-out;
									}
									.card-no-nework-found header{
										padding:0px 10px;
									}
									.card-no-nework-found section{
										padding:0px 10px;
									}

									`}</style>
							</article>)

export default NoNetworkFound