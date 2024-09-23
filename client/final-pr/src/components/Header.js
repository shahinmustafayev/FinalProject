import React, { useState } from 'react'
import cart1 from '../assets/img/cart/cart-1.jpg';
import logo from '../assets/img/logo/logo.png';
import cart2 from '../assets/img/cart/cart-2.jpg';

const Header = () => {

    // const [showProduct, setShowProduct] = useState(false);

    // const showProductData = async () => {
    //     setShowProduct(!showProduct);
    // } 

    return (
        <div>
        <header className="header-area sticky-bar">
        <div className="main-header-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col">
                        <div className="logo pt-40">
                            <a href="/">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="main-menu">
                            <nav>
                                <ul>
                                    <li className="angle-shape"><a href="/">Home </a>
                                        <ul className="submenu">
                                            <li><a href="/#">Home version 1 </a></li>
                                            <li><a href="/#">Home version 2 </a></li>
                                            <li><a href="/#">Home version 3 </a></li>
                                        </ul>
                                    </li>
                                    <li className="angle-shape"><a href="/#"> Shop <span>new</span> </a>
                                        <ul className="mega-menu">
                                            <li><a className="menu-title" href="/#"> Shop Layout</a>
                                                <ul>
                                                    <li><a href="/#">standard style</a></li>
                                                    <li><a href="/#">grid 2 column</a></li>
                                                    <li><a href="/#">grid 4 column</a></li>
                                                    <li><a href="/#">grid full wide</a></li>
                                                    <li><a href="/#">grid right sidebar </a></li>
                                                </ul>
                                            </li>
                                            <li><a className="menu-title" href="/#">Shop Layout</a>
                                                <ul>
                                                    <li><a href="/#">list style 1</a></li>
                                                    <li><a href="/#">list style 2</a></li>
                                                    <li><a href="/#">list style 3</a></li>
                                                    <li><a href="/#">list full wide</a></li>
                                                    <li><a href="/#">list with sidebar </a></li>
                                                </ul>
                                            </li>
                                            <li><a className="menu-title" href="/#">Product Details</a>
                                                <ul>
                                                    <li><a href="/#" >tab style 1</a></li>
                                                    <li><a href="/#" >tab style 2</a></li>
                                                    <li><a href="/#" >tab style 3</a></li>
                                                    <li><a href="/#" >gallery style  </a></li>
                                                    <li><a href="/#" >gallery right</a></li>
                                                </ul>
                                            </li>
                                            <li><a className="menu-title" href="/#">Product Details</a>
                                                <ul>
                                                    <li><a href="/#">sticky style</a></li>
                                                    <li><a href="/#">sticky right</a></li>
                                                    <li><a href="/#">slider style</a></li>
                                                    <li><a href="/#">Affiliate style</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="/#">Accessories <span>hot</span> </a></li>
                                    <li><a href="/#"> Contact </a></li>
                                    <li className="angle-shape"><a href="/#">Pages </a>
                                        <ul className="submenu">
                                            <li><a href="/#">about us </a></li>
                                            <li><a href="/#">cart page </a></li>
                                            <li><a href="/#">checkout </a></li>
                                            <li><a href="/#">compare </a></li>
                                            <li><a href="/#">wishlist </a></li>
                                            <li><a href="/#">my account </a></li>
                                            <li><a href="/#">contact us </a></li>
                                            <li><a href="/#">login/register </a></li>
                                        </ul>
                                    </li>
                                    <li className="angle-shape"><a href="/#"> Blog </a>
                                        <ul className="submenu">
                                            <li><a href="/#">standard style </a></li>
                                            <li><a href="/#">blog 2 column </a></li>
                                            <li><a href="/#">blog 3 column </a></li>
                                            <li><a href="/#">blog right sidebar </a></li>
                                            <li><a href="/#">blog details </a></li>
                                            <li><a href="/#">blog details right sidebar </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* style={{display: 'none'}} */}
                </div>
            </div>
        
            <div className="main-search-active">
                <div className="sidebar-search-icon">
                    <button className="search-close"><span className="sli sli-close"></span></button>
                </div>
                <div className="sidebar-search-input">
                    <form>
                        <div className="form-search">
                            <input id="search" className="input-text" placeholder="Search Now" type="search" />
                            <button>
                                <i className="sli sli-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="header-small-mobile">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="mobile-logo">
                            <a href="/#">
                                <img alt="" src={logo} />
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="header-right-wrap">
                            <div className="cart-wrap">
                                <button className="icon-cart-active">
                                    <span className="icon-cart">
                                        <i className="sli sli-bag"></i>
                                        <span className="count-style">02</span>
                                    </span>
                                    <span className="cart-price">
                                        $320.00
                                    </span>
                                </button>
                                <div className="shopping-cart-content">
                                    <div className="shopping-cart-top">
                                        <h4>Shoping Cart</h4>
                                        <a className="cart-close" href="/#"><i className="sli sli-close"></i></a>
                                    </div>
                                    <ul>
                                        <li className="single-shopping-cart">
                                            <div className="shopping-cart-img">
                                                <a href="/#"><img alt="" src={cart1} /></a>
                                            </div>
                                            <div className="shopping-cart-title">
                                                <h4><a href="/#">Product Name </a></h4>
                                                <span>1 x 90.00</span>
                                            </div>
                                        </li>
                                        <li className="single-shopping-cart">
                                            <div className="shopping-cart-img">
                                                <a href="/#"><img alt="" src={cart2} /></a>
                                            </div>
                                            <div className="shopping-cart-title">
                                                <h4><a href="/#">Product Name</a></h4>
                                                <span>1 x 90.00</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="shopping-cart-bottom">
                                        <div className="shopping-cart-total">
                                            <h4>Total : <span className="shop-total">$260.00</span></h4>
                                        </div>
                                        <div className="shopping-cart-btn btn-hover text-center">
                                            <a className="default-btn" href="/#">checkout</a>
                                            <a className="default-btn" href="/#">view cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-off-canvas">
                                <a className="mobile-aside-button" href="/#"><i className="sli sli-menu"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>

        <div className="mobile-off-canvas-active">
        <a className="mobile-aside-close"><i className="sli sli-close"></i></a>
        <div className="header-mobile-aside-wrap">
            <div className="mobile-search">
                <form className="search-form" action="#">
                    <input type="text" placeholder="Search entire store…" />
                    <button className="button-search"><i className="sli sli-magnifier"></i></button>
                </form>
            </div>
            <div className="mobile-menu-wrap">
                <div className="mobile-navigation">
                    <nav>
                        <ul className="mobile-menu">
                            <li className="menu-item-has-children"><a href="/#">Home</a>
                                <ul className="dropdown">
                                    <li><a href="/#">Home version 1 </a></li>
                                    <li><a href="/#">Home version 2 </a></li>
                                    <li><a href="/#">Home version 3 </a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children "><a href="/#">shop</a>
                                <ul className="dropdown">
                                    <li className="menu-item-has-children"><a href="/#">Shop Layout</a>
                                        <ul className="dropdown">
                                            <li><a href="/#">standard style</a></li>
                                            <li><a href="/#">grid 2 column</a></li>
                                            <li><a href="/#">grid 4 column</a></li>
                                            <li><a href="/#">grid full wide</a></li>
                                            <li><a href="/#">grid right sidebar </a></li>
                                            <li><a href="/#">list style 1</a></li>
                                            <li><a href="/#">list style 2</a></li>
                                            <li><a href="/#">list style 3</a></li>
                                            <li><a href="/#">list full wide</a></li>
                                            <li><a href="/#">list with sidebar </a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="/#">products details</a>
                                        <ul className="dropdown">
                                            <li><a href="/#">tab style 1</a></li>
                                            <li><a href="/#">tab style 2</a></li>
                                            <li><a href="/#">tab style 3</a></li>
                                            <li><a href="/#">gallery style  </a></li>
                                            <li><a href="/#">gallery right</a></li>
                                            <li><a href="/#">sticky style</a></li>
                                            <li><a href="/#">sticky right</a></li>
                                            <li><a href="/#">slider style</a></li>
                                            <li><a href="/#">Affiliate style</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="/#">Accessories </a></li>
                            <li className="menu-item-has-children"><a href="/#">pages</a>
                                <ul className="dropdown">
                                    <li><a href="/#">about us </a></li>
                                    <li><a href="/#">cart page </a></li>
                                    <li><a href="/#">checkout </a></li>
                                    <li><a href="/#">compare </a></li>
                                    <li><a href="/#">wishlist </a></li>
                                    <li><a href="/#">my account </a></li>
                                    <li><a href="/#">contact us </a></li>
                                    <li><a href="/#">login/register </a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children "><a href="/#">Blog</a>
                                <ul className="dropdown">
                                    <li><a href="/#">standard style </a></li>
                                    <li><a href="/#">blog 2 column </a></li>
                                    <li><a href="/#">blog 3 column </a></li>
                                    <li><a href="/#">blog right sidebar </a></li>
                                    <li><a href="/#">blog details </a></li>
                                    <li><a href="/#">blog details right sidebar </a></li>
                                </ul>
                            </li>
                            <li><a href="/#">Contact us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="mobile-curr-lang-wrap">
                <div className="single-mobile-curr-lang">
                    <a className="mobile-language-active" href="/#">Language <i className="sli sli-arrow-down"></i></a>
                    <div className="lang-curr-dropdown lang-dropdown-active">
                        <ul>
                            <li><a href="/#">English (US)</a></li>
                            <li><a href="/#">English (UK)</a></li>
                            <li><a href="/#">Spanish</a></li>
                        </ul>
                    </div>
                </div>
                <div className="single-mobile-curr-lang">
                    <a className="mobile-currency-active" href="/#">Currency <i className="sli sli-arrow-down"></i></a>
                    <div className="lang-curr-dropdown curr-dropdown-active">
                        <ul>
                            <li><a href="/#">USD</a></li>
                            <li><a href="/#">EUR</a></li>
                            <li><a href="/#">Real</a></li>
                            <li><a href="/#">BDT</a></li>
                        </ul>
                    </div>
                </div>
                <div className="single-mobile-curr-lang">
                    <a className="mobile-account-active" href="/#">My Account <i className="sli sli-arrow-down"></i></a>
                    <div className="lang-curr-dropdown account-dropdown-active">
                        <ul>
                            <li><a href="/#">Login</a></li>
                            <li><a href="/#">Creat Account</a></li>
                            <li><a href="/#">My Account</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mobile-social-wrap">
                <a className="facebook" href="/#"><i className="sli sli-social-facebook"></i></a>
                <a className="twitter" href="/#"><i className="sli sli-social-twitter"></i></a>
                <a className="pinterest" href="/#"><i className="sli sli-social-pinterest"></i></a>
                <a className="instagram" href="/#"><i className="sli sli-social-instagram"></i></a>
                <a className="google" href="/#"><i className="sli sli-social-google"></i></a>
            </div>
        </div>
        </div>

        </div>
    )
}

export default Header
