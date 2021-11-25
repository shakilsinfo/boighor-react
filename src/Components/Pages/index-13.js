import React, {useState, useEffect, Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import HomeSkeleton from '../Skeleton/HomeSkeleton';



function Index() {

	const i = 0;
	const url = 'https://boighor.com/unified/prod/api/getHome';
	const [homeData, setHomeData] = useState([]);
	const [counter, setCounter] = useState(0);
	const [loading, setLoading] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(2);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);



	const [display, setDisplay] = useState('none');
	// pagination
	const indexOfLastPost = currentPage * booksPerPage;
  const indexOfFirstPost = indexOfLastPost - booksPerPage;
  

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

	useEffect(() => {
		setLoading(true);

		axios({
			method: 'POST',
			url: 'https://boighor.com/unified/prod/api/getHome',
			headers: {'Content-Type': 'application/json'}
		}).then(function (response) {
		    
		    const timing = setTimeout(() => {
		      setHomeData(response.data.data);
		      console.log(response.data.data);
		      setLoading(false);
		      setDisplay(1);
		    }, 3000);
		    return () => clearTimeout(timing);
		  });
	},[url]);

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

  var catSettings = {
 
    infinite: false,
    slidesToShow: 9,
    arrows: [
    	{
    		default: true
    	}
    ],
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 9,
          
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 8,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 4,
        }
      }
      
    ]
  };

  var bookSettings = {
 
    infinite: false,
    slidesToShow: 5,
    arrows: [
    	{
    		default: true
    	}
    ],
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
        }
      }
      
    ]
  };
  var bookSettingsPlr = {
 
    infinite: false,
    slidesToShow: 3,
    arrows: [
    	{
    		default: true
    	}
    ],
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
        }
      }
      
    ]
  };
  
  return (
    <div>
    		{loading==true ? <HomeSkeleton /> :
      		homeData.map((view,key) =>{
      			
      			if(view.itemtype == 5){
	      			if(view.contents.length >0){
	      				const sliderData = view.contents;
	      				return (
	      					<section className="hero-area hero-slider-2">
	      					
						        <div className="container">
						            <div className="row align-items-lg-center">
						                <div className="col-12 banner-slider slider-binddfasff" >
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
						                </div>
						            </div>
						        </div>
						    </section>
		      				
		      			)
	      			}
      			
      			}
      		})

      	}

        <section className="mt--10" style={{display:display==1?'block':'none'}}>
					<div className="container">
						<div className="product-slider">
							<Slider {...catSettings}>
								<div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
			                                    <Link to="content/genre/sfi"> 
												     <img src="image/genre/Science-fiction.png" alt="" />
			                                    </Link>     
											</div>
										</div>
										 <div className="product-header">
											<h4 className="title-cat"><Link to="content/genre/sfi">Science-Fiction</Link></h4>
										</div>
									</div>
								</div>
								<div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
			                                    <Link to="audiobook">
												     <img src="image/genre/Audio-Book.png" alt="" />
			                                    </Link>     
											</div>
										</div>
										 <div className="product-header">
											<h4 className="title-cat"><Link to="audiobook">Audio Book</Link>
											</h4>
										</div>
									</div>
								</div>
								<div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
			                                    <Link to="content/genre/cld">
												     <img src="image/genre/Children.png" alt="" />
			                                    </Link>     
											</div>
										</div>
										<div className="product-header">
											<h4 className="title-cat"><Link to="content/genre/cld">Children</Link></h4>
										</div>
									</div>
								</div>
								<div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
			                                    <Link to="content/category/pom">
												     <img src="image/genre/Poem.png" alt="" />
			                                    </Link>     
											</div>
										</div>
										<div className="product-header">
											<h4 className="title-cat"><Link to="content/category/pom">Poem</Link></h4>
										</div>
									</div>
								</div>
								<div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
			                                    <Link to="content/genre/thr">
											      	<img src="image/genre/Thriller-and-mystery.png" alt="" />
			                                    </Link>    
											</div>
										</div>
										<div className="product-header">
											<h4 className="title-cat"><Link to="content/genre/thr">Thriller</Link></h4>
										</div>
									</div>
								</div>
								<div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
			                                    <Link to="content/genre/rom">
												     <img src="image/genre/Romance.png" alt="" />
			                                    </Link>
											</div>
										</div>
										<div className="product-header">
											<h4 className="title-cat"><Link to="content/genre/rom">Romance</Link>
											</h4>
										</div>
									</div>
								</div>
								 <div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
			                                    <Link to="content/genre/lib">
												     <img src="image/genre/Liberation-war.png" alt="" />
			                                    </Link>     
											</div>
										</div>
										<div className="product-header">
											<h4 className="title-cat"><Link to="content/genre/lib">Liberation-war</Link></h4>
										</div>
									</div>
								</div>
								 <div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
			                                    <Link to="content/genre/pal">
												     <img src="image/genre/Psychological.png" alt="" />
			                                    </Link>     
											</div>
										</div>
										<div className="product-header">
											<h4 className="title-cat"><Link to="content/genre/pal">Psychological</Link></h4>
										</div>
									</div>
								</div>
							   
								<div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
												<img src="image/genre/classic.png" alt="" />
											</div>
										</div>
										<div className="product-header">
											<h4 className="title-cat"><Link to="">Classic</Link></h4>
										</div>
									</div>
								</div>
								<div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
												<img src="image/genre/Humor.png" alt="" />
											</div>
										</div>
										<div className="product-header">
											<h4 className="title-cat"><Link to="">Comedy-and-Humor</Link></h4>
										</div>
									</div>
								</div>
								 <div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
												<img src="image/genre/Horror.png" alt="" />
											</div>
										</div>
										<div className="product-header">
											<h4 className="title-cat"><Link to="">Horror</Link></h4>
										</div>
									</div>
								</div>
								<div className="single-slide">
									<div className="product-card">
										<div className="product-card">
											<div className="card-image categories">
												<img src="image/genre/anyaprokash.png" alt="" />
											</div>
										</div>
										 <div className="product-header">
											<h4 className="title-cat"><Link to="">Anyaprokash</Link></h4>
										</div>
									</div>
								</div>
							   

							</Slider>
						</div>
					</div>
				</section>
      	{
      		
      		homeData.map((fetchData,key) =>{
      			console.log(key);
      			const ctype = fetchData.itemtype;
						const catname = fetchData.catname;
						const catname_bn = fetchData.catname_bn;
						const catcode = fetchData.catcode;
						const bookData = fetchData.contents;
						const datatoArr = Object.keys(fetchData);

						if(key == 4){
							if( catcode == 'plr'){
								
								if(fetchData.contents.length >0){
									return (
										<section className="bg-gray  mt--30 section-margin">
										<div className="container  mb--30 bg-gray">
											<div className="row">
												<div className="col-lg-4 mb-30 mb-lg--0">
													<div className="home-left-sidebar">
														<div className="single-side mb--30 mt--30">
															<Link to="content/category/cmx" className="promo-image promo-overlay">
																<img src="/image/comics.png" alt="" />
															</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-8 mt-30 mb--30">
													<div className="home-right-block bg-white"> 
														<div className="section-margin single-block plr-block bg-white">
															<div className="section-title plr-title mt-0">
																<h2> {catname_bn}</h2>
															</div>
															<div className="product-slider">
																<Slider {...bookSettingsPlr}>
																	{
																		bookData.map((books) =>{
																			const bookcover = books.bookcover;
																			const title = books.bookname;
																			const title_bn = books.bookname_bn;
																			const bookcode = books.bookcode;
																			const author_bn = books.writer_bn;
									                                        const adb = books.adb;
																			const price = books.bdt;
																			return (
																				<div className="single-slide">
																					<div className="product-card">
																						<div className="product-header">
																							<Link to={'book/'+bookcode} className="author">{author_bn}</Link>
																							<h3><Link to={'book/'+bookcode}>{title_bn}</Link></h3>
																						</div>
																						<Link to={'book/'+bookcode} className="book-content">
																							<div className="product-card--body">
																								<div className="card-image content">
																									<img src={bookcover} alt={title_bn} />
																									{adb==1?<div className="playBtn"></div>:<div></div>}
																								</div>
																								{
																									adb !=1 ?<div className="price-block">
																												<span className="price">{price}</span>
																											</div>:<div></div>
																								}
																							</div>

																						</Link>
																					</div>
																				</div>
																			)
																		})
																	}
																</Slider>
															</div>
															
														</div>
													</div>
												</div>
											</div>
										</div>
										</section>
									)
								}
							}
						}else{
							if((ctype == '1') && (catcode !='plr')){
		      				if(fetchData.contents.length >0){

		      					return (

		      						<section className="section-margin mt-30 mb--50">
		      							<div className="container">
													<div className="section-title section-title--bordered">
														<Link to={'content/'+ catcode}>
															<h2>{catname_bn} {key}</h2>
														</Link>
													</div>
													<div className="product-slider">
														<Slider {...bookSettings}>
															{
																bookData.map((books) =>{
																	const bookcover = books.bookcover;
																	const title = books.bookname;
																	const title_bn = books.bookname_bn;
																	const bookcode = books.bookcode;
																	const author_bn = books.writer_bn;
							                                        const adb = books.adb;
																	const price = books.bdt;
																	return (
																		<div className="single-slide">
																			<div className="product-card">
																				<div className="product-header">
																					<Link to={'book/'+bookcode} className="author">{author_bn}</Link>
																					<h3><Link to={'book/'+bookcode}>{title_bn}</Link></h3>
																				</div>
																				<Link to={'book/'+bookcode} className="book-content">
																					<div className="product-card--body">
																						<div className="card-image content">
																							<img src={bookcover} alt={title_bn} />
																							{adb==1?<div className="playBtn"></div>:<div></div>}
																						</div>
																						{
																							adb !=1 ?<div className="price-block">
																										<span className="price">{price}</span>
																									</div>:<div></div>
																						}
																					</div>

																				</Link>
																			</div>
																		</div>
																	)
																})
															}
														</Slider>
													</div>
												</div>
		      						</section> 
		      					)
		      				}
		      			}	
						}
      			

      		})
      	}
    </div>
  );
}
export default Index;