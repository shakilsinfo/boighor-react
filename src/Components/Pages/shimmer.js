
import React, {useState, useEffect, Component } from 'react';
import {Media} from 'reactstrap';
import ContentShimmer from 'react-content-shimmer';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";

function Shimmer() {

	var sliderSettings = {
	  autoplay: true,
      dots: true,
      infinite: false,
      arrows: [
      	{
      		default: false
      	}
      ],
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const i = 0;
	const url = 'https://boighor.com/unified/prod/api/getHome';
	const [homeData, setHomeData] = useState([]);
	const [counter, setCounter] = useState(0);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		axios({
			method: 'POST',
			url: 'https://boighor.com/unified/prod/api/getHome',
			headers: {'Content-Type': 'application/json'}
		}).then(function (response) {
			
		    setHomeData(response.data.data);
		    setLoading(true);
		    setCounter(counter + 1);
		    
		  });
	},[url]);
	console.log(isLoading);
	return(

			<div>
			{
      		homeData.map((view,key) =>{
      			
      			

      			if(view.itemtype == 5){
	      			if(view.contents.length >0){
	      				const sliderData = view.contents;
	      				return (
	      					
	      					<section className="hero-area hero-slider-2">
	      					
						        <div className="container">
						            <div className="row align-items-lg-center">
						                <div className="col-12 banner-slider slider-binddfasff" >
						                	{
						                		isLoading? <p>loading is going</p>:
						                	
						                     <Slider {...sliderSettings}>
							                     {
												 	sliderData.map((slider,index)=> {
												 		
												 		const imageLoc = slider.image_location;
												 		const type = slider.type;
												 		const title_bn = slider.title;
												 		const code = slider.code;
												 		const url = slider.url;
												 		const promodetails = slider.promodetails;
												 		const posturl = "https://boighor.com/";
												 		
												 		if(type == "category"){
				                                                 const  posturl =  "https://boighor.com/content/category/"+ code;
				                                               }else if(type == "genre"){
				                                                 const posturl = "https://boighor.com/content/genre/"+ code;
				                                               }else if(type=="section"){
				                                                  const posturl = "https://boighor.com/content/"+ code;
				                                               }else if(type=="promotion"){
				                                                  const posturl = "https://boighor.com/promotion/"+ code;
				                                               }else if(type=="ugc"){
				                                                  const posturl = "https://boighor.com/promotion/ugc";
				                                               }else{
				                                               	const posturl = "https://boighor.com/";	
				                                               }
												 		return (
												 			<a href={posturl} id={index}>
																<div className="single-slide" key= {code} >

																<img src={imageLoc} style={{width:"100%"}}/>
		                                                      </div>
		                                                   </a>
												 		)
												 	})
												 }
										         
						                     </Slider>
						                     }
						                </div>
						            </div>
						        </div>
						    </section>
		      			)
	      			}
      			
      			}
      		})
      	}
				
			</div>
		)
}
export default Shimmer;