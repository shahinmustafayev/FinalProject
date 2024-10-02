import React from 'react'
import product5 from '../assets/img/product/product-5.jpg'
import product6 from '../assets/img/product/product-6.jpg'
import product7 from '../assets/img/product/product-7.jpg'
import product8 from '../assets/img/product/product-8.jpg'
import testi from "../assets/img/icon-img/testi.png";
import testi1 from "../assets/img/testimonial/testi-1.png";
import testi2 from "../assets/img/testimonial/testi-2.png";

import banner4 from "../assets/img/banner/banner-4.png";
import banner5 from "../assets/img/banner/banner-5.png";

import freeShipping from "../assets/img/icon-img/free-shipping.png";
import support from "../assets/img/icon-img/support.png";
import security from "../assets/img/icon-img/security.png";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const Testmonial = () => {
  return (

        <div className="testimonial-area pt-80 pb-95 section-margin-1" style={{ backgroundImage: "url('../assets/img/bg/bg-1.jpg')" }} >
      
        <div class="container">
            <div class="row">
                <div class="col-lg-10 ml-auto mr-auto">
                    <div class="testimonial-active owl-carousel owl-drag owl-loaded">

                        <OwlCarousel
                            className="single-testimonial owl-carousel text-center"
                            items={1}
                            mouseDrag={true}
                            touchDrag={true}
                            autoplay={true}
                            autoplayTimeout={4000}
                            loop={true}
                        >

                        <div class="single-testimonial text-center">
                            <img src={testi1} alt="" />
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet, consectetur adipiscing elit, didunt.</p>
                            <div class="client-info">
                                <img src={testi} alt="" />
                                <h5>Nikolas Dehlli</h5>
                            </div>
                        </div>

                        <div class="single-testimonial text-center">
                            <img src={testi2} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit.</p>
                            <div class="client-info">
                                <img src={testi} alt="" />
                                <h5>Grace Alvarado</h5>
                            </div>
                        </div>

                        </OwlCarousel>


                    </div>
                </div>
            </div>
        </div>

        <div class="product-area pt-95 pb-70">
        <div class="container">
            <div class="section-title text-center pb-60">
                <h2>New Arrivals</h2>
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
            </div>
            <div class="arrivals-wrap scroll-zoom">
                <div class="ht-products product-slider-active owl-carousel">
                   
                    <div class="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                        <div class="ht-product-inner">
                            <div class="ht-product-image-wrap">
                                <a href="product-details.html" class="ht-product-image"> <img src={product5} alt="Universal Product Style" /> </a>
                                <div class="ht-product-action">
                                    <ul>
                                        <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i class="sli sli-magnifier"></i><span class="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-refresh"></i><span class="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ht-product-content">
                                <div class="ht-product-content-inner">
                                    <div class="ht-product-categories"><a href="#">Clock</a></div>
                                    <h4 class="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                    <div class="ht-product-price">
                                        <span class="new">$60.00</span>
                                    </div>
                                    <div class="ht-product-ratting-wrap">
                                        <span class="ht-product-ratting">
                                            <span class="ht-product-user-ratting" style={{width: '100%'}}>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                            </span>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="ht-product-action">
                                    <ul>
                                        <li><a href="#"><i class="sli sli-magnifier"></i><span class="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-refresh"></i><span class="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                                <div class="ht-product-countdown-wrap">
                                    <div class="ht-product-countdown" data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div class="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                        <div class="ht-product-inner">
                            <div class="ht-product-image-wrap">
                                <a href="product-details.html" class="ht-product-image"> <img src={product6} alt="Universal Product Style"/> </a>
                                <div class="ht-product-action">
                                    <ul>
                                        <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i class="sli sli-magnifier"></i><span class="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-refresh"></i><span class="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ht-product-content">
                                <div class="ht-product-content-inner">
                                    <div class="ht-product-categories"><a href="#">Lamp </a></div>
                                    <h4 class="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                    <div class="ht-product-price">
                                        <span class="new">$50.00</span>
                                        <span class="old">$80.00</span>
                                    </div>
                                    <div class="ht-product-ratting-wrap">
                                        <span class="ht-product-ratting">
                                            <span class="ht-product-user-ratting" style={{width: '90%'}}>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                            </span>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="ht-product-action">
                                    <ul>
                                        <li><a href="#"><i class="sli sli-magnifier"></i><span class="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-refresh"></i><span class="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                                <div class="ht-product-countdown-wrap">
                                    <div class="ht-product-countdown" data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                        <div class="ht-product-inner">
                            <div class="ht-product-image-wrap">
                                <a href="product-details.html" class="ht-product-image"> <img src={product7} alt="Universal Product Style"/> </a>
                                <div class="ht-product-action">
                                    <ul>
                                        <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i class="sli sli-magnifier"></i><span class="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-refresh"></i><span class="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ht-product-content">
                                <div class="ht-product-content-inner">
                                    <div class="ht-product-categories"><a href="#">Chair</a></div>
                                    <h4 class="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                    <div class="ht-product-price">
                                        <span class="new">$30.00</span>
                                    </div>
                                    <div class="ht-product-ratting-wrap">
                                        <span class="ht-product-ratting">
                                            <span class="ht-product-user-ratting" style={{width: '100%'}}>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                            </span>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="ht-product-action">
                                    <ul>
                                        <li><a href="#"><i class="sli sli-magnifier"></i><span class="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-refresh"></i><span class="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                                <div class="ht-product-countdown-wrap">
                                    <div class="ht-product-countdown" data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                        <div class="ht-product-inner">
                            <div class="ht-product-image-wrap">
                                <a href="product-details.html" class="ht-product-image"> <img src={product8} alt="Universal Product Style" /> </a>
                                <div class="ht-product-action">
                                    <ul>
                                        <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i class="sli sli-magnifier"></i><span class="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-refresh"></i><span class="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ht-product-content">
                                <div class="ht-product-content-inner">
                                    <div class="ht-product-categories"><a href="#">Chair</a></div>
                                    <h4 class="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                    <div class="ht-product-price">
                                        <span class="new">$60.00</span>
                                        <span class="old">$90.00</span>
                                    </div>
                                    <div class="ht-product-ratting-wrap">
                                        <span class="ht-product-ratting">
                                            <span class="ht-product-user-ratting" style={{width: '100%'}}>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                            </span>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="ht-product-action">
                                    <ul>
                                        <li><a href="#"><i class="sli sli-magnifier"></i><span class="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-refresh"></i><span class="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                                <div class="ht-product-countdown-wrap">
                                    <div class="ht-product-countdown" data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                        <div class="ht-product-inner">
                            <div class="ht-product-image-wrap">
                                <a href="product-details.html" class="ht-product-image"> <img src={product6} alt="Universal Product Style" /> </a>
                                <div class="ht-product-action">
                                    <ul>
                                        <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i class="sli sli-magnifier"></i><span class="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-refresh"></i><span class="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="ht-product-content">
                                <div class="ht-product-content-inner">
                                    <div class="ht-product-categories"><a href="#">Lamp </a></div>
                                    <h4 class="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                    <div class="ht-product-price">
                                        <span class="new">$50.00</span>
                                        <span class="old">$80.00</span>
                                    </div>
                                    <div class="ht-product-ratting-wrap">
                                        <span class="ht-product-ratting">
                                            <span class="ht-product-user-ratting" style={{width: '90%'}}>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                                <i class="sli sli-star"></i>
                                            </span>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        <i class="sli sli-star"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="ht-product-action">
                                    <ul>
                                        <li><a href="#"><i class="sli sli-magnifier"></i><span class="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i class="sli sli-heart"></i><span class="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i class="sli sli-refresh"></i><span class="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i class="sli sli-bag"></i><span class="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                                <div class="ht-product-countdown-wrap">
                                    <div class="ht-product-countdown" data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    </div>
        <div class="banner-area pb-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="single-banner mb-30 scroll-zoom">
                            <a href="product-details.html"><img src={banner4} alt="" /></a>
                            <div class="banner-content banner-position-3">
                                <h3>Black Monday</h3>
                                <h2>Wooden Lamp <br/>Save 30%</h2>
                                <a href="product-details.html">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="single-banner mb-30 scroll-zoom">
                            <a href="product-details.html"><img src={banner5} alt="" /></a>
                            <div class="banner-content banner-position-4">
                                <h3>Black Monday</h3>
                                <h2>Wooden Lamp <br/>Save 30%</h2>
                                <a href="product-details.html">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="feature-area">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4">
                    <div class="single-feature mb-40">
                        <div class="feature-icon">
                            <img src={freeShipping} alt="" />
                        </div>
                        <div class="feature-content">
                            <h4>Free Shipping</h4>
                            <p>Most product are free <br/>shipping.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-4 col-md-4">
                    <div class="single-feature mb-40 pl-50">
                        <div class="feature-icon">
                            <img src={support} alt="" />
                        </div>
                        <div class="feature-content">
                            <h4>Customer Support</h4>
                            <p>24x7 Customer Support</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-4">
                    <div class="single-feature mb-40">
                        <div class="feature-icon">
                            <img src={security} alt="" />
                        </div>
                        <div class="feature-content">
                            <h4>Secure Payment</h4>
                            <p>Most Secure Payment <br/>for customer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
  )
}

export default Testmonial
