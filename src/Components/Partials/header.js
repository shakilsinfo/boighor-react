import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
		<div className="site-wrapper" id="top">
            <div className="site-header header-2 mb--20 d-none d-lg-block">
                <div className="header-middle pt--10 pb--10">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <Link to="/" className="site-brand">
                                    <img src="image/logo.svg" className="logo" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-5">
                                <div className="header-search-block">
                                    <form action="search" method="POST">
                                        <input type="text" name="searchkey" placeholder="Book name, author, genre, category..." />
                                        <button>Search</button>
                                    </form>    
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="main-navigation flex-lg-right">
                                    <div className="cart-widget">
                                        <div className="login-block">
                                            <Link className="login" to="signin"
                                                   className="font-weight-bold">Sign In</Link>
                                        </div>
                                        <div className="cart-block">
                                            <div className="cart-total">
                                                <span className="text-number" id="text-number">
                                                    0
                                                </span>
                                                <span className="text-item">
                                                    Shopping Cart
                                                </span>
                                                <span className="price" id="text-price">
                                                    <i className="fas fa-chevron-down"></i>
                                                </span>
                                            </div>
                                            <div className="cart-dropdown-block" id="empty-block">
                                                <div className="single-cart-block" >
                                                    <div  className="cart text-center mt--10">
                                                        <h5> Cart is empty</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-dropdown-block"  id="cartlist" style={{display:'none', paddingBottom:'0px'}}> 
                                                <div className="single-cart-block"> 
                                                    <div id="allitemlist" >
                                                        <div className="cart-itemlist" id="cart-itemlist">
                                                        </div>
                                                    </div>
                                                     <div className=" single-cart-block ">
                                                        <div className="btn-block">
                                                            <Link  to="cart" className="btn cartbtn">View Cart <i
                                                                    className="fas fa-chevron-right"></i></Link>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom bg-primary">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <nav className="category-nav white-nav  ">
                                        <div>
                                            <Link to="" className="category-trigger"><i
                                                    className="fa fa-bars"></i>Browse
                                                categories</Link>
                                           <ul className="category-menu">
                                                <li className="cat-item menu-item">
                                                    <Link to="audiobook">Audio Books</Link>
                                                </li> 
                                                <li className="cat-item menu-item">
                                                    <Link to="content/category/str">Story</Link>
                                                </li>   
                                                 <li className="cat-item menu-item">
                                                    <Link to="content/category/nov">Novel</Link>
                                                </li>   
                                                 <li className="cat-item menu-item">
                                                    <Link to="content/category/otr">Others</Link>
                                                </li>     
                                                 <li className="cat-item menu-item">
                                                    <Link to="content/category/pom">Poem </Link>
                                                </li>   
                                                <li className="cat-item menu-item">
                                                    <Link to="content/category/atc">Article</Link>
                                                </li>
                                                 <li className="cat-item menu-item">
                                                    <Link to="content/category/drm">Drama</Link>
                                                </li>
                                                 <li className="cat-item menu-item hidden-menu-item">
                                                    <Link to="content/category/cmx">Commics</Link>
                                                </li>
                                                <li className="cat-item menu-item hidden-menu-item">
                                                    <Link to="content/category/trv">Travel</Link>
                                                </li>
                                                <li className="cat-item  menu-item hidden-menu-item">
                                                    <Link to="content/category/abi">Auto Biography</Link>
                                                </li>
                                                <li className="cat-item menu-item hidden-menu-item">
                                                    <Link to="content/category/his">History</Link>
                                                </li>
                                                <li className="cat-item"><Link to="#" className="js-expand-hidden-menu">More
                                                        Categories</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                
                                <div className="col-lg-9">
                                    <div className="main-navigation flex-lg-right">
                                        <ul className="main-menu menu-right main-menu--white li-last-0">
                                            <li className="menu-item nav-item">
                                                <Link to="">Home</Link>
                                            </li>
                                            {/*  Shop */}

                                            <li className="menu-item has-children mega-menu">
                                                <Link to="">Browse <i
                                                        className="fas fa-chevron-down dropdown-arrow"></i></Link>
                                                <ul className="sub-menu four-column">
                                                    <li className="cus-col-25">
                                                        <h3 className="menu-title"><Link to="">Popular Genre </Link></h3>
                                                        <ul className="mega-single-block">
                                                           <li className="menu-item nav-item"><Link to="content/genre/adv">Adventure</Link></li>
                                                            <li className="menu-item nav-item"><Link to="content/genre/mys">Mystery</Link></li>
                                                            <li><Link to="content/genre/rom">Romance</Link></li>
                                                            <li className="menu-item nav-item"><Link to="content/genre/hor">Horror</Link></li>
                                                            <li className="nav-item"> <Link to="content/genre/dec">Detective</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="cus-col-25">
                                                        <h3 className="menu-title"> <Link to="">Popular Authors</Link></h3>
                                                        <ul className="mega-single-block">
                                                           <li className="menu-item nav-item"><Link to="authordetails/A03F0">Humayun Ahmed</Link></li>
                                                            <li className="menu-item nav-item"><Link to="authordetails/A0500">Mouri Morium</Link></li>
                                                            <li className="menu-item nav-item"><Link to="authordetails/A0534"> Mohammad Nazim Uddin</Link></li>
                                                            <li className="menu-item nav-item"><Link to="authordetails/A04FB">Shanjana Alam</Link></li>
                                                            <li className="menu-item nav-item"><Link to="authordetails/A03EC">Anisul Hoque</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="cus-col-25">
                                                        <h3 className="menu-title"> <Link to="">Highlights
                                                               </Link></h3>
                                                        <ul className="mega-single-block">
                                                            <li className="menu-item nav-item"><Link to="content/new">Hot & New</Link></li>
                                                            <li className="menu-item nav-item"><Link to="content/feb">Featured Event</Link></li>
                                                            <li className="menu-item nav-item"><Link to="authordetails/A0500">Featured Authors</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="cus-col-25">
                                                        <h3 className="menu-title"><Link to="">Top Pics
                                                               </Link></h3>
                                                        <ul className="mega-single-block">
                                                           <li className="menu-item"><Link to="content/bes">Best Seller</Link></li>
                                                            <li className="menu-item nav-item"><Link to="content/aub">Best Audio book</Link></li>
                                                            <li className="menu-item nav-item"><Link to="content/topten">Top 10 Books This Week</Link></li>
                                                            <li className="menu-item nav-item"><Link to="authors/top-writer">Top Authors this week</Link></li>
                                                             <li className="nav-item"><Link to="content/ect">Editors Choice</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* Pages */}
                                            
                                            <li className="menu-item nav-item">
                                                <Link to="/blogs">Audio Books</Link>
                                            </li>
                                            <li className="menu-item nav-item">
                                                <Link to="/authors">Authors</Link>
                                            </li>
                                            {/* 
                                            <li className="menu-item has-children">
                                                <Link to="">My Account &nbsp<i
                                                        className="fas fa-chevron-down dropdown-arrow"></i></Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item nav-item"> <Link to="account">My Account</Link></li>
                                                    <li className="menu-item nav-item"> <Link to="mylibrary">My Library</Link></li>
                                                    <li className="menu-item nav-item"> <Link to="account/history">Download History</Link></li>
                                                </ul>
                                            </li>
                                        */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-mobile-menu">
                <header className="mobile-header d-block d-lg-none pt--10 pb-md--10">
                    <div className="container">
                        <div className="row align-items-sm-end align-items-center">
                            <div className="col-md-4 col-7">
                                <Link to="" className="site-brand">
                                    <img src="image/logo.svg" alt="logo" className="logo_sm" />
                                </Link>
                            </div>
                            <div className="col-md-5 order-3 order-md-2">
                                <nav className="category-nav   ">
                                    <div>
                                        <Link to="" className="category-trigger"><i
                                                className="fa fa-bars"></i>Browse
                                            categories</Link>
                                         <ul className="category-menu">
                                            <li className="cat-item">
                                                <Link to="audiobook">Audio Books</Link>
                                            </li> 
                                            <li className="cat-item">
                                                <Link to="content/category/str">Story</Link>
                                            </li>   
                                             <li className="cat-item">
                                                <Link to="content/category/nov">Novel</Link>
                                            </li>   
                                             <li className="cat-item">
                                                <Link to="content/category/otr">Others</Link>
                                            </li>     
                                             <li className="cat-item">
                                                <Link to="content/category/pom">Poem </Link>
                                            </li>   
                                            <li className="cat-item">
                                                <Link to="content/category/atc">Article</Link>
                                            </li>
                                             <li className="cat-item">
                                                <Link to="content/category/drm">Drama</Link>
                                            </li>
                                             <li className="cat-item hidden-menu-item">
                                                <Link to="content/category/cmx">Commics</Link>
                                            </li>
                                            <li className="cat-item hidden-menu-item">
                                                <Link to="content/category/trv">Travel</Link>
                                            </li>
                                            <li className="cat-item hidden-menu-item">
                                                <Link to="content/category/abi">Auto Biography</Link>
                                            </li>
                                            <li className="cat-item hidden-menu-item">
                                                <Link to="content/category/his">History</Link>
                                            </li>
                                            <li className="cat-item"><Link to="#" className="js-expand-hidden-menu">More
                                                    Categories</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-md-3 col-5  order-md-3 text-right">
                                <div className="mobile-header-btns header-top-widget">
                                    <ul className="header-links">
                                        <li className="sin-link menu-item">
                                            <Link to="cart" className="cart-link link-icon cartbtn"><i className="ion-bag"></i></Link>
                                        </li>
                                        <li className="sin-link menu-item">
                                            <button className="link-icon hamburgur-icon off-canvas-btn"><i
                                                    className="ion-navicon"></i></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Off Canvas Navigation Start */}
                <aside className="off-canvas-wrapper">
                    <div className="btn-close-off-canvas">
                        <i className="ion-android-close"></i>
                    </div>
                    <div className="off-canvas-inner">
                        {/* search box start */}
                        <div className="search-box offcanvas">
                            <form action="search" method="post">
                                <input type="text" name="searchkey" placeholder="Book name, author, genre, category..." />
                                <button className="search-btn"><i className="ion-ios-search-strong"></i></button>
                            </form>
                        </div>
                        {/* search box end */}
                        {/* mobile menu start */}
                        <div className="mobile-navigation">
                            {/* mobile menu navigation start */}
                            <nav className="off-canvas-nav">
                                <ul className="mobile-menu main-mobile-menu">
                                     <li><Link to="/">Home</Link></li>
                                    <li className="menu-item has-children mega-menu">
                                        <Link to="#">Browse</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item menu-item-has-children">
                                                <Link to="#">Popular Genre</Link>
                                                <ul className="sub-menu">
                                                    <li  className="menu-item nav-item"><Link to="content/genre/adv">Adventure</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/genre/mys">Mystery</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/genre/rom">Romance</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/genre/hor">Horror</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/genre/dec">Detective</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="#">Popular Authors</Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item nav-item"><Link to="authordetails/A03F0">Humayun Ahmed</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authordetails/A0500">Mouri Morium</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authordetails/A0534"> Mohammad Nazim Uddin</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authordetails/A04FB">Shanjana Alam</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authordetails/A03EC">Anisul Hoque</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="#">Highlights</Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item nav-item"><Link to="content/new">Hot & New</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/feb">Featured Event</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authordetails/A0500">Featured Authors</Link></li>
                                                        </ul>
                                                    </li>
                                            <li className="menu-item-has-children">
                                                <Link to="#">Top Pics</Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item nav-item"><Link to="content/bes">Best Seller</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/aub">Best Audio book</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/topten">Top 10 Books This Week</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authors/top-writer">Top Authors this week</Link></li>
                                                     <li className="menu-item nav-item"><Link to="content/ect">Editors Choice</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><Link to="audiobook">Audio Books</Link></li>
                                    <li className="menu-item"><Link to="authors">Authors</Link></li>
                                    <li className="menu-item nav-item"><Link to="signin">Sign In</Link></li>                 
                                </ul>
                            </nav>
                            {/* mobile menu navigation end */}
                        </div>
                        {/* mobile menu end */}
                        <div className="off-canvas-bottom">
                            <div className="contact-list">
                                <Link to="" className="sin-contact"><i className="fas fa-mobile-alt"></i>+8801914457857</Link>
                                <Link to="" className="sin-contact"><i className="fas fa-envelope"></i>info@ebsbd.com</Link>
                            </div>
                            <div className="off-canvas-social">
                                <Link to="https://www.facebook.com/boighorltd/" className="single-icon" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                            </div>
                        </div>
                    </div>
                </aside>
                {/*Off Canvas Navigation End*/}
                </div>
                <div className="sticky-init fixed-header common-sticky">
                <div className="container d-none d-lg-block">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <Link to="" className="site-brand">
                                <img src="image/logo.svg" className="logo" alt="" />
                            </Link>
                        </div>
                        <div className="col-lg-8">
                            <div className="main-navigation flex-lg-right">
                                <ul className="main-menu menu-right ">
                                    <li className="menu-item nav-item">
                                        <Link to="">Home </Link>
                                        
                                    </li>

                                    {/* Shop */}
                                    <li className="menu-item has-children mega-menu">
                                        <Link to="">Browse <i
                                                className="fas fa-chevron-down dropdown-arrow"></i></Link>
                                        <ul className="sub-menu four-column">
                                            <li className="cus-col-25">
                                                <h3 className="menu-title"><Link to="">Popular Genre </Link></h3>
                                                <ul className="mega-single-block">
                                                    <li className="menu-item nav-item"><Link to="content/genre/adv">Adventure</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/genre/mys">Mystery</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/genre/rom">Romance</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/genre/hor">Horror</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/genre/dec">Detective</Link></li>
                                                </ul>
                                            </li>
                                            <li className="cus-col-25">
                                                <h3 className="menu-title"> <Link to="">Popular Authors</Link></h3>
                                                <ul className="mega-single-block">
                                                     <li className="menu-item nav-item"><Link to="authordetails/A03F0">Humayun Ahmed</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authordetails/A0500">Mouri Morium</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authordetails/A0534"> Mohammad Nazim Uddin</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authordetails/A04FB">Shanjana Alam</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authordetails/A03EC">Anisul Hoque</Link></li>
                                                </ul>
                                            </li>
                                            <li className="cus-col-25">
                                                <h3 className="menu-title"> <Link to="">Highlights</Link>
                                                </h3>
                                                <ul className="mega-single-block">
                                                   <li className="menu-item nav-item"><Link to="content/new">Hot & New</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/feb">Featured Event</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authordetails/A0500">Featured Authors</Link></li>
                                                </ul>
                                            </li>
                                            <li className="cus-col-25">
                                                <h3 className="menu-title"><Link to="">Top Pics</Link>
                                                </h3>
                                                <ul className="mega-single-block">
                                                  <li><Link to="content/bes">Best Seller</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/aub">Best Audio book</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/topten">Top 10 Books This Week</Link></li>
                                                    <li className="menu-item nav-item"><Link to="authors/top-writer">Top Authors this week</Link></li>
                                                    <li className="menu-item nav-item"><Link to="content/ect">Editors Choice</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Pages */}
                                    <li className="menu-item nav-item">
                                        <Link to="audiobook">Audio Books</Link>
                                    </li>
                                    <li className="menu-item nav-item">
                                        <Link to="authors">Authors</Link>
                                    </li>
                                   { /*
                                    <li className=" menu-item has-children">
                                        <Link to="">My Account &nbsp;<i
                                                className="fas fa-chevron-down dropdown-arrow"></i></Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item nav-item"> <Link to="">My Account</Link></li>
                                            <li className="menu-item nav-item"> <Link to="">My Library</Link></li>
                                            <li className="menu-item nav-item"> <Link to="">Download History</Link></li>
                                            
                                        </ul>
                                    </li>
                                   */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
    }
}
export default Header;