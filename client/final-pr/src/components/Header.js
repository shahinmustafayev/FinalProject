import React, { useState } from 'react'
import logo from '../assets/img/logo/logo.png';
const Header = () => {
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
                                    <li className="angle-shape"><a href="/">Home </a></li>
                                    <li className="angle-shape"><a href="/"> Shop <span>new</span> </a></li>
                                    <li><a href="/">Accessories <span>hot</span> </a></li>
                                    <li><a href="/contact"> Contact </a></li>
                                    <li className="angle-shape"><a href="/">Pages </a></li>
                                    <li className="angle-shape"><a href="/"> Blog </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
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
                    <div className="col-6"></div>
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
                            <li className="menu-item-has-children"><a href="/">Home</a></li>
                            <li className="menu-item-has-children "><a href="/">shop</a></li>
                            <li><a href="/">Accessories </a></li>
                            <li><a href="/contact">Contact us</a></li>
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
