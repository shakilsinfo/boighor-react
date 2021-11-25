
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function AuthorList(){
	// const [auhorList, setAuthorList] = useState([]);
	// const [loading, setLoading] = useState(0);
	useEffect(() => {
		// setLoading(true);
		axios({
				method: 'POST',
				url: 'https://boighor.com/unified/prod/api/getAuthorList',
				data: {
					'page' : 2,
				}
			}).then(function (response) {

			    const timing = setTimeout(() => {
			    	// Parse Array content to paginate
			    	const responseData = response.data.data;
					
			      	// setLoading(false);
			      	console.log(responseData);
			      
			      	
			    }, 3000);
			    return () => clearTimeout(timing);
			});
		
	},[]);

	return(

		<div>
			<section className="breadcrumb-section">
				<h2 className="sr-only">Site Breadcrumb</h2>
				<div className="container">
					<div className="breadcrumb-contents">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to="/">Home</Link></li>
								<li className="breadcrumb-item active">Authors</li>
							</ol>
						</nav>
					</div>
				</div>
			</section>
			<main className="inner-page-sec-padding-bottom">
			    <div className="container">
			        

			        <div className="shop-toolbar">
			            <div className="row align-items-center">
			                <div className="col-xl-12 col-md-4 col-sm-6 mt--10 mt-sm--0 text-center pt--10 pb--10">
			                    <span className="toolbar-status"> Showing 1 to 24 from 177 Authors results </span>
			                </div>
			            </div>
			        </div>
			        <div className="row mt--40">
			            <div className="col-md-12">
			                <div className="pagination-block">
			                    <ul className="pagination-btns flex-center">
			                        <li className="active" id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('1');"> 1</a></li>

			                        <li id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('2');">2</a></li>
			                        <li id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('3');">3</a></li>
			                        <li id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('4');">4</a></li>
			                        <li id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('5');">5</a></li>
			                        <li id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('8');">Last</a></li>
			                    </ul>
			                </div>
			            </div>
			        </div>
			        <div className="shop-product-wrap grid with-pagination row space-db--30 shop-border">
			            <div className="col-lg-2 col-sm-6 col-6">
			                <div className="product-card">
			                    <div className="product-grid-content">
			                        <div className="product-header">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0411"> </a>
			                            <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0411"></a><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0411"> অবনীন্দ্রনাথ ঠাকুর</a></h3>
			                        </div>
			                        <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0411">
			                            <div className="product-card--body">
			                                <div className="card-image padding-0">
			                                    <img className="bio-img" src="https://bangladhol.com/author_th/A0411.jpg" alt="অবনীন্দ্রনাথ ঠাকুর" />
			                                </div>
			                            </div>
			                        </a>
			                    </div>
			                    <div className="product-list-content">
			                        <div className="card-image padding-0">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                <img src="" alt="" />
			                            </a>
			                        </div>
			                        <div className="product-card--body mt--30">
			                            <div className="product-header">
			                                <a href="" className="author"> </a>
			                                <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/book/" tabindex="0"> </a></h3>
			                            </div>
			                            <article>
			                                <h2 className="sr-only">Card List Article</h2>
			                                <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                    <p></p>
			                                </a>
			                            </article>
			                            <div className="price-block">
			                                <span className="price"></span>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-lg-2 col-sm-6 col-6">
			                <div className="product-card">
			                    <div className="product-grid-content">
			                        <div className="product-header">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0473"> </a>
			                            <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0473"></a><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0473"> আগাথা ক্রিস্টি</a></h3>
			                        </div>
			                        <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0473">
			                            <div className="product-card--body">
			                                <div className="card-image padding-0">
			                                    <img className="bio-img" src="https://bangladhol.com/author_th/A0473.jpg" alt="আগাথা ক্রিস্টি" />
			                                </div>
			                            </div>
			                        </a>
			                    </div>
			                    <div className="product-list-content">
			                        <div className="card-image padding-0">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                <img src="" alt="" />
			                            </a>
			                        </div>
			                        <div className="product-card--body mt--30">
			                            <div className="product-header">
			                                <a href="" className="author"> </a>
			                                <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/book/" tabindex="0"> </a></h3>
			                            </div>
			                            <article>
			                                <h2 className="sr-only">Card List Article</h2>
			                                <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                    <p></p>
			                                </a>
			                            </article>
			                            <div className="price-block">
			                                <span className="price"></span>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-lg-2 col-sm-6 col-6">
			                <div className="product-card">
			                    <div className="product-grid-content">
			                        <div className="product-header">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0408"> </a>
			                            <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0408"></a><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0408"> আহসান হাবীব</a></h3>
			                        </div>
			                        <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0408">
			                            <div className="product-card--body">
			                                <div className="card-image padding-0">
			                                    <img className="bio-img" src="https://bangladhol.com/author_th/A0408.jpg" alt="আহসান হাবীব" />
			                                </div>
			                            </div>
			                        </a>
			                    </div>
			                    <div className="product-list-content">
			                        <div className="card-image padding-0">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                <img src="" alt="" />
			                            </a>
			                        </div>
			                        <div className="product-card--body mt--30">
			                            <div className="product-header">
			                                <a href="" className="author"> </a>
			                                <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/book/" tabindex="0"> </a></h3>
			                            </div>
			                            <article>
			                                <h2 className="sr-only">Card List Article</h2>
			                                <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                    <p></p>
			                                </a>
			                            </article>
			                            <div className="price-block">
			                                <span className="price"></span>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-lg-2 col-sm-6 col-6">
			                <div className="product-card">
			                    <div className="product-grid-content">
			                        <div className="product-header">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A042B"> </a>
			                            <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A042B"></a><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A042B"> অক্ষয়কুমার দত্ত</a></h3>
			                        </div>
			                        <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A042B">
			                            <div className="product-card--body">
			                                <div className="card-image padding-0">
			                                    <img className="bio-img" src="https://bangladhol.com/author_th/A042B.jpg" alt="অক্ষয়কুমার দত্ত" />
			                                </div>
			                            </div>
			                        </a>
			                    </div>
			                    <div className="product-list-content">
			                        <div className="card-image padding-0">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                <img src="" alt="" />
			                            </a>
			                        </div>
			                        <div className="product-card--body mt--30">
			                            <div className="product-header">
			                                <a href="" className="author"> </a>
			                                <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/book/" tabindex="0"> </a></h3>
			                            </div>
			                            <article>
			                                <h2 className="sr-only">Card List Article</h2>
			                                <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                    <p></p>
			                                </a>
			                            </article>
			                            <div className="price-block">
			                                <span className="price"></span>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-lg-2 col-sm-6 col-6">
			                <div className="product-card">
			                    <div className="product-grid-content">
			                        <div className="product-header">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0404"> </a>
			                            <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0404"></a><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0404"> আল মাহমুদ</a></h3>
			                        </div>
			                        <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A0404">
			                            <div className="product-card--body">
			                                <div className="card-image padding-0">
			                                    <img className="bio-img" src="https://bangladhol.com/author_th/A0404.jpg" alt="আল মাহমুদ" />
			                                </div>
			                            </div>
			                        </a>
			                    </div>
			                    <div className="product-list-content">
			                        <div className="card-image padding-0">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                <img src="" alt="" />
			                            </a>
			                        </div>
			                        <div className="product-card--body mt--30">
			                            <div className="product-header">
			                                <a href="" className="author"> </a>
			                                <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/book/" tabindex="0"> </a></h3>
			                            </div>
			                            <article>
			                                <h2 className="sr-only">Card List Article</h2>
			                                <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                    <p></p>
			                                </a>
			                            </article>
			                            <div className="price-block">
			                                <span className="price"></span>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			            <div className="col-lg-2 col-sm-6 col-6">
			                <div className="product-card">
			                    <div className="product-grid-content">
			                        <div className="product-header">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A050A"> </a>
			                            <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A050A"></a><a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A050A"> আলাওল</a></h3>
			                        </div>
			                        <a href="https://remote.ebsbd.com/boighorglobal/beta/authordetails/A050A">
			                            <div className="product-card--body">
			                                <div className="card-image padding-0">
			                                    <img className="bio-img" src="https://boighor.com/img/authornoimg.jpg" alt="আলাওল" />
			                                </div>
			                            </div>
			                        </a>
			                    </div>
			                    <div className="product-list-content">
			                        <div className="card-image padding-0">
			                            <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                <img src="" alt="" />
			                            </a>
			                        </div>
			                        <div className="product-card--body mt--30">
			                            <div className="product-header">
			                                <a href="" className="author"> </a>
			                                <h3><a href="https://remote.ebsbd.com/boighorglobal/beta/book/" tabindex="0"> </a></h3>
			                            </div>
			                            <article>
			                                <h2 className="sr-only">Card List Article</h2>
			                                <a href="https://remote.ebsbd.com/boighorglobal/beta/book/">
			                                    <p></p>
			                                </a>
			                            </article>
			                            <div className="price-block">
			                                <span className="price"></span>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			        
			        <div className="row mt--50">
			            <div className="col-md-12">
			                <div className="pagination-block">
			                    <ul className="pagination-btns flex-center">
			                        <li className="active" id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('1');"> 1</a></li>

			                        <li id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('2');">2</a></li>
			                        <li id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('3');">3</a></li>
			                        <li id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('4');">4</a></li>
			                        <li id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('5');">5</a></li>
			                        <li id="previous"><a className="single-btn" href="javascript:void(0);" onclick="pageRequet('8');">Last</a></li>
			                    </ul>
			                </div>
			            </div>
			        </div>
			    </div>
			</main>

		</div>
	)

}
export default AuthorList;