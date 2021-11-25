import React, {useState, useEffect, Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Index() {

	const url = 'https://boighor.com/unified/beta/api/getHome';
	const [homeData, setHomeData] = useState([]);

	useEffect(() => {
		axios({
			method: 'POST',
			url: 'https://boighor.com/unified/beta/api/getHome',
			headers: {'Content-Type': 'application/json'}
		}).then(function (response) {
		    setHomeData(response.data.data);
		  });
	},[url]);

    return (
    <div>
    	homeData.map((view,key) =>{
      			console.log('key ID '+key);
      			if(view.itemtype == 5){
	      			if(view.contents.length >0){
	      				const sliderData = view.contents;
	      				return (
	      					<section className="hero-area hero-slider-2">
					            <div className="container">
					                <div className="row align-items-lg-center">
					                    <div className="col-12 banner-slider">
					                        <div className="sb-slick-slider" data-slick-setting='{
					                                                                "autoplay": true,
					                                                                "autoplaySpeed": 8000,
					                                                                "slidesToShow": 1,
					                                                                "dots":true
					                                                                }'>
					                            <div className="single-slide " data-bg="image/slider/s1.jpg">
					                                <img src="image/slider/s1.jpg" />
					                            </div>
					                            <div className="single-slide " data-bg="image/slider/s1.jpg">
					                                <img src="image/slider/s2.jpg" />
					                            </div>
					                            
					                        </div>
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
  );
}
export default Index;