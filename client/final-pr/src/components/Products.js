import React from 'react'

import product1 from '../assets/img/product/product-1.jpg'
import product2 from '../assets/img/product/product-2.jpg'
import product3 from '../assets/img/product/product-3.jpg'
import product4 from '../assets/img/product/product-4.jpg'
import product5 from '../assets/img/product/product-5.jpg'
import product6 from '../assets/img/product/product-6.jpg'
import product7 from '../assets/img/product/product-7.jpg'
import product8 from '../assets/img/product/product-8.jpg'

import testi from '../assets/img/icon-img/testi.png'
import testi1 from '../assets/img/testimonial/testi-1.png'
import testi2 from '../assets/img/testimonial/testi-2.png'

import banner4 from '../assets/img/banner/banner-4.png'
import banner5 from '../assets/img/banner/banner-5.png'

import freeShipping from '../assets/img/icon-img/free-shipping.png'
import support from '../assets/img/icon-img/support.png'
import security from '../assets/img/icon-img/security.png'

const Products = () => {
  return (
    <div>
        <div className="product-area pb-70">
        <div className="container">
            <div className="section-title text-center pb-40">
                <h2>All Products</h2>
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical</p>
            </div>
            <div className="product-tab-list nav pb-60 text-center">
                <a className="active" href="#product-1" data-toggle="tab">
                    <h4>Home appliance </h4>
                </a>
                <a href="#product-2" data-toggle="tab">
                    <h4>Kitchen appliance </h4>
                </a>
                <a href="#product-3" data-toggle="tab">
                    <h4>Lamps</h4>
                </a>
            </div>
            <div className="tab-content jump-2">
                <div id="product-1" className="tab-pane active">
                    <div className="ht-products product-slider-active owl-carousel">
                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product1} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Chair</a></div>
                                        <h4 className="ht-product-title"><a href="product-details.html">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$60.00</span>
                                            <span className="old">$80.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product2} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Lamp </a></div>
                                        <h4 className="ht-product-title"><a href="product-details.html">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$90.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product3} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Chair</a></div>
                                        <h4 className="ht-product-title"><a href="product-details.html">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$40.00</span>
                                            <span className="old">$70.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product4} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Clock</a></div>
                                        <h4 className="ht-product-title"><a href="product-details.html">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$50.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product2} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Lamp </a></div>
                                        <h4 className="ht-product-title"><a href="product-details.html">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$90.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="product-2" className="tab-pane">
                    <div className="ht-products product-slider-active owl-carousel">
                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product5} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Clock</a></div>
                                        <h4 className="ht-product-title"><a href="product-details.html">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$60.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product6} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Lamp </a></div>
                                        <h4 className="ht-product-title"><a href="product-details.html">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$50.00</span>
                                            <span className="old">$80.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product7} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Chair</a></div>
                                        <h4 className="ht-product-title"><a href="product-details.html">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$30.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product8} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Chair</a></div>
                                        <h4 className="ht-product-title"><a href="product-details.html">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$60.00</span>
                                            <span className="old">$90.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product5} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Clock</a></div>
                                        <h4 className="ht-product-title"><a href="product-details.html">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$60.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="product-3" className="tab-pane">
                    <div className="ht-products product-slider-active owl-carousel">

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product4} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Clock</a></div>
                                        <h4 className="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$60.00</span>
                                            <span className="old">$80.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product8} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Chair </a></div>
                                        <h4 className="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$90.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product2} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Lamp</a></div>
                                        <h4 className="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$40.00</span>
                                            <span className="old">$70.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product5} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Clock</a></div>
                                        <h4 className="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$50.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                            <div className="ht-product-inner">
                                <div className="ht-product-image-wrap">
                                    <a href="product-details.html" className="ht-product-image"> <img src={product4} alt="Universal Product Style"/> </a>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ht-product-content">
                                    <div className="ht-product-content-inner">
                                        <div className="ht-product-categories"><a href="#">Clock</a></div>
                                        <h4 className="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                        <div className="ht-product-price">
                                            <span className="new">$60.00</span>
                                            <span className="old">$80.00</span>
                                        </div>
                                        <div className="ht-product-ratting-wrap">
                                            <span className="ht-product-ratting">
                                                <span className="ht-product-user-ratting" style={{width: '100%'}}>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </span>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ht-product-action">
                                        <ul>
                                            <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                            <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                            <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                            <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="ht-product-countdown-wrap">
                                        <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="testimonial-area pt-80 pb-95 section-margin-1" style={{ backgroundImage: "url('../assets/img/bg/bg-1.jpg')" }}
 >
        <div className="container">
            <div className="row">
                <div className="col-lg-10 ml-auto mr-auto">
                    <div className="testimonial-active owl-carousel nav-style-1">
                        <div className="single-testimonial text-center">
                            <img src={testi1} alt=""/>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum dolor sit amet, consectetur adipiscing elit, didunt.</p>
                            <div className="client-info">
                                <img src={testi} alt=""/>
                                <h5>Nikolas Dehlli</h5>
                            </div>
                        </div>
                        <div className="single-testimonial text-center">
                            <img src={testi2} alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit.</p>
                            <div className="client-info">
                                <img src={testi} alt=""/>
                                <h5>Grace Alvarado</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="product-area pt-95 pb-70">
        <div className="container">
            <div className="section-title text-center pb-60">
                <h2>New Arrivals</h2>
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical</p>
            </div>
            <div className="arrivals-wrap scroll-zoom">
                <div className="ht-products product-slider-active owl-carousel">
                    <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                        <div className="ht-product-inner">
                            <div className="ht-product-image-wrap">
                                <a href="product-details.html" className="ht-product-image"> <img src={product5} alt="Universal Product Style"/> </a>
                                <div className="ht-product-action">
                                    <ul>
                                        <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ht-product-content">
                                <div className="ht-product-content-inner">
                                    <div className="ht-product-categories"><a href="#">Clock</a></div>
                                    <h4 className="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                    <div className="ht-product-price">
                                        <span className="new">$60.00</span>
                                    </div>
                                    <div className="ht-product-ratting-wrap">
                                        <span className="ht-product-ratting">
                                            <span className="ht-product-user-ratting" style={{ width: '100%' }}>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                            </span>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="ht-product-action">
                                    <ul>
                                        <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                                <div className="ht-product-countdown-wrap">
                                    <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                        <div className="ht-product-inner">
                            <div className="ht-product-image-wrap">
                                <a href="product-details.html" className="ht-product-image"> <img src={product6} alt="Universal Product Style"/> </a>
                                <div className="ht-product-action">
                                    <ul>
                                        <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ht-product-content">
                                <div className="ht-product-content-inner">
                                    <div className="ht-product-categories"><a href="#">Lamp </a></div>
                                    <h4 className="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                    <div className="ht-product-price">
                                        <span className="new">$50.00</span>
                                        <span className="old">$80.00</span>
                                    </div>
                                    <div className="ht-product-ratting-wrap">
                                        <span className="ht-product-ratting">
                                            <span className="ht-product-user-ratting" style={{ width: '90%' }}>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                            </span>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="ht-product-action">
                                    <ul>
                                        <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                                <div className="ht-product-countdown-wrap">
                                    <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                        <div className="ht-product-inner">
                            <div className="ht-product-image-wrap">
                                <a href="product-details.html" className="ht-product-image"> <img src={product7} alt="Universal Product Style"/> </a>
                                <div className="ht-product-action">
                                    <ul>
                                        <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ht-product-content">
                                <div className="ht-product-content-inner">
                                    <div className="ht-product-categories"><a href="#">Chair</a></div>
                                    <h4 className="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                    <div className="ht-product-price">
                                        <span className="new">$30.00</span>
                                    </div>
                                    <div className="ht-product-ratting-wrap">
                                        <span className="ht-product-ratting">
                                            <span className="ht-product-user-ratting" style={{ width: '100%' }}>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                            </span>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="ht-product-action">
                                    <ul>
                                        <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                                <div className="ht-product-countdown-wrap">
                                    <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                        <div className="ht-product-inner">
                            <div className="ht-product-image-wrap">
                                <a href="product-details.html" className="ht-product-image"> <img src={product8} alt="Universal Product Style"/> </a>
                                <div className="ht-product-action">
                                    <ul>
                                        <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ht-product-content">
                                <div className="ht-product-content-inner">
                                    <div className="ht-product-categories"><a href="#">Chair</a></div>
                                    <h4 className="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                    <div className="ht-product-price">
                                        <span className="new">$60.00</span>
                                        <span className="old">$90.00</span>
                                    </div>
                                    <div className="ht-product-ratting-wrap">
                                        <span className="ht-product-ratting">
                                            <span className="ht-product-user-ratting" style={{ width: '100%' }}>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                            </span>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="ht-product-action">
                                    <ul>
                                        <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                                <div className="ht-product-countdown-wrap">
                                    <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                        <div className="ht-product-inner">
                            <div className="ht-product-image-wrap">
                                <a href="product-details.html" className="ht-product-image"> <img src={product6} alt="Universal Product Style"/> </a>
                                <div className="ht-product-action">
                                    <ul>
                                        <li><a href="#" data-toggle="modal" data-target="#exampleModal"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ht-product-content">
                                <div className="ht-product-content-inner">
                                    <div className="ht-product-categories"><a href="#">Lamp </a></div>
                                    <h4 className="ht-product-title"><a href="#">Demo Product Name</a></h4>
                                    <div className="ht-product-price">
                                        <span className="new">$50.00</span>
                                        <span className="old">$80.00</span>
                                    </div>
                                    <div className="ht-product-ratting-wrap">
                                        <span className="ht-product-ratting">
                                            <span className="ht-product-user-ratting" style={{ width: '90%' }}>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                                <i className="sli sli-star"></i>
                                            </span>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        <i className="sli sli-star"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="ht-product-action">
                                    <ul>
                                        <li><a href="#"><i className="sli sli-magnifier"></i><span className="ht-product-action-tooltip">Quick View</span></a></li>
                                        <li><a href="#"><i className="sli sli-heart"></i><span className="ht-product-action-tooltip">Add to Wishlist</span></a></li>
                                        <li><a href="#"><i className="sli sli-refresh"></i><span className="ht-product-action-tooltip">Add to Compare</span></a></li>
                                        <li><a href="#"><i className="sli sli-bag"></i><span className="ht-product-action-tooltip">Add to Cart</span></a></li>
                                    </ul>
                                </div>
                                <div className="ht-product-countdown-wrap">
                                    <div className="ht-product-countdown" data-countdown="2020/01/01"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <div className="banner-area pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="single-banner mb-30 scroll-zoom">
                        <a href="product-details.html"><img src={banner4} alt=""/></a>
                        <div className="banner-content banner-position-3">
                            <h3>Black Monday</h3>
                            <h2>Wooden Lamp <br/>Save 30%</h2>
                            <a href="product-details.html">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="single-banner mb-30 scroll-zoom">
                        <a href="product-details.html"><img src={banner5} alt=""/></a>
                        <div className="banner-content banner-position-4">
                            <h3>Black Monday</h3>
                            <h2>Wooden Lamp <br/>Save 30%</h2>
                            <a href="product-details.html">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="feature-area">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="single-feature mb-40">
                        <div className="feature-icon">
                            <img src={freeShipping} alt="" />
                        </div>
                        <div className="feature-content">
                            <h4>Free Shipping</h4>
                            <p>Most product are free <br/>shipping.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-4">
                    <div className="single-feature mb-40 pl-50">
                        <div className="feature-icon">
                            <img src={support} alt="" />
                        </div>
                        <div className="feature-content">
                            <h4>Customer Support</h4>
                            <p>24x7 Customer Support</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4">
                    <div className="single-feature mb-40">
                        <div className="feature-icon">
                            <img src={security} alt="" />
                        </div>
                        <div className="feature-content">
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

    export default Products
