
import React, { Component } from 'react';
import {Media} from 'reactstrap';
import {Link} from 'react-router-dom';
class Contact extends Component{
	render(){
		return(

			<div>
				<section className="breadcrumb-section">
					<h2 className="sr-only">Site Breadcrumb</h2>
					<div className="container">
						<div className="breadcrumb-contents">
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/">Home</Link></li>
									<li className="breadcrumb-item active">Contact</li>
								</ol>
							</nav>
						</div>
					</div>
				</section>
				<main className="contact_area inner-page-sec-padding-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="google-map"></div>
                            </div>
                        </div>
                        <div className="row mt--60 ">
                            <div className="col-lg-5 col-md-5 col-12">
                                <div className="contact_adress">
                                    <div className="ct_address">
                                        <h3 className="ct_title">Location & Details</h3>
                                        <p>It is a long established fact that readewill be distracted by the readable content of
                                            a page when looking
                                            at ilayout.</p>
                                    </div>
                                    <div className="address_wrapper">
                                        <div className="address">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="contact-info-text">
                                                <p><span>Address:</span> 1234 - Bandit Tringi lAliquam <br/> Vitae. New York</p>
                                            </div>
                                        </div>
                                        <div className="address">
                                            <div className="icon">
                                                <i className="far fa-envelope"></i>
                                            </div>
                                            <div className="contact-info-text">
                                                <p><span>Email: </span> support@example.com </p>
                                            </div>
                                        </div>
                                        <div className="address">
                                            <div className="icon">
                                                <i className="fas fa-mobile-alt"></i>
                                            </div>
                                            <div className="contact-info-text">
                                                <p><span>Phone:</span> (800) 0123 456 789 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12 mt--30 mt-md--0">
                                <div className="contact_form">
                                    <h3 className="ct_title">Send Us a Message</h3>
                                    <form id="contact-form" action="php/mail.php" method="post" className="contact-form">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Your Name <span className="required">*</span></label>
                                                    <input type="text" id="con_name" name="con_name" className="form-control"
                                                        required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Your Email <span className="required">*</span></label>
                                                    <input type="email" id="con_email" name="con_email" className="form-control"
                                                        required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Your Phone*</label>
                                                    <input type="text" id="con_phone" name="con_phone" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Your Message</label>
                                                    <textarea id="con_message" name="con_message"
                                                        className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-btn">
                                                    <button type="submit" value="submit" id="submit" className="btn btn-black"
                                                        name="submit">send</button>
                                                </div>
                                                <div className="form__output"></div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="form-output">
                                        <p className="form-messege"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
			</div>
		)
	}
}
export default Contact;