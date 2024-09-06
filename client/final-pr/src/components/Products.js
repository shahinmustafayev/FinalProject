import React from 'react'

import product1 from '../assets/img/product/product-1.jpg'
import product2 from '../assets/img/product/product-2.jpg'
import product3 from '../assets/img/product/product-3.jpg'
import product4 from '../assets/img/product/product-4.jpg'
import product5 from '../assets/img/product/product-5.jpg'
import product6 from '../assets/img/product/product-6.jpg'
import product7 from '../assets/img/product/product-7.jpg'
import product8 from '../assets/img/product/product-8.jpg'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const Products = () => {
  return (
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

                <OwlCarousel
                    className="product-active owl-carousel nav-style-1"
                    items={4}
                    margin={'40px'}
                    mouseDrag={true}
                    touchDrag={true}
                >

                    <div className="ht-products product-slider-active owl-carousel owl-drag owl-loaded d-flex">

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

                    </OwlCarousel>
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
  )
}

    export default Products
