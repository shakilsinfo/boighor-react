import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
		<footer className="site-footer mt--30">
        <div className="container">
            <div className="row justify-content-between">
                <div className=" col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-footer pb--40">
                        <div className="brand-footer footer-title">
                            <img src="image/logo.svg"className="logo" alt="" />
                        </div>
                        <div className="footer-contact">
                            <p><span className="label">Address:</span><span className="text">E.B.Solutions Ltd, House 32,Road 2, Dhanmondi, 
                                    Dhaka 1205,
                                    Bangladesh</span></p>
                            <p><span className="label">Phone:</span><span className="text">&nbsp; +8801914457857</span></p>
                            <p><span className="label">Email:</span><span className="text">&nbsp; &nbsp; info@ebsbd.com</span></p>
                        </div>
                    </div>
                </div>
                <div className=" col-xl-3 col-lg-2 col-sm-6 mt--30">
                    <div className="single-footer pb--40">
                        <div className="footer-title">
                            <h3>Information</h3>
                        </div>
                        <ul className="footer-list normal-list">
                            <li className="footeritem"><Link to="info/about">About </Link></li>
                            <li className="footeritem"><Link to="info/help">Help</Link></li>
                            <li className="footeritem"><Link to="info/privacy">Privacy Policy</Link></li>
                            <li className="footeritem"><Link to="info/terms">Terms & Condition</Link></li>
                            <li className="footeritem"><Link to="info/license">License</Link></li>
                        </ul>
                    </div>
                </div>
                <div className=" col-xl-3 col-lg-2 col-sm-6 mt--30">
                    <div className="single-footer pb--40">
                        <div className="footer-title">
                            <h3>Extra</h3>
                        </div>
                        <ul className="footer-list normal-list">
                            <li className="footeritem"><Link to="mylibrary">Download History</Link></li>
                            <li className="footeritem"><Link to="account">My Account</Link></li>
                            <li className="footeritem"><Link to="contact">Contact</Link></li>
                            <li className="footeritem"><Link to="info/refund">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className=" col-xl-3 col-lg-4 col-sm-6 mt--30">
                    <div className="footer-title footeritem">
                        <h3>Download App</h3>
                    </div>
                    <div className="newsletter-form footeritem">
                       <a href="https://play.google.com/store/apps/details?id=com.ebs.boighor" target="_blank"><img src="image/google.png" className="mt--20" /></a>
                    </div>
                    <div className="social-block mt--20 footeritem">
                        <h3 className="title">STAY CONNECTED</h3>
                         <div className="fb-page" 
data-href="https://www.facebook.com/boighorltd"
data-width="580" 
data-hide-cover="false"
data-show-facepile="false"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <p className="copyright-heading">বইঘর-এ আছে শিল্প-সাহিত্যের সব শাখার বই। বাংলা ও ইংরেজি ভাষার পুরনো বা সদ্যপ্রকাশিত কিংবা এক্সক্লুসিভ বই— কী নেই এখানে ? শুধু 'বই পড়া' নয়,
                            আপনার জন্য রয়েছে  'বই শোনা'র (অডিও বুক) দারুণ ব্যবস্থা।</p>
                <Link to="#" className="payment-block">
                    <img src="image/payment_options.png" alt="" />
                </Link>
                <p className="copyright-text"> {new Date().getFullYear()} <Link to="https://ebsbd.com/" target="_blank" className="author">E.B.Solutions Ltd.</Link> All Right Reserved.
                  </p>
            </div>
        </div>
    </footer>
)
    }
}
export default Footer;