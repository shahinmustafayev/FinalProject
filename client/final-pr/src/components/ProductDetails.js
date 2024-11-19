import Header from './Header'
import Footer from './Footer'
import client1 from '../assets/img/product-details/client-1.jpg'
import client2 from '../assets/img/product-details/client-2.jpg'
import client3 from '../assets/img/product-details/client-3.jpg'
import banner15 from '../assets/img/banner/banner-15.png'
import product5 from '../assets/img/product/product-5.jpg'
import product6 from '../assets/img/product/product-6.jpg'
import product7 from '../assets/img/product/product-7.jpg'
import product8 from '../assets/img/product/product-8.jpg'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'

const ProductDetails = () => {

    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:4444/product/${id}`)
            .then(res => {
                setItem(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!item) {
        return <p>Ürün bulunamadı.</p>;
    }
    // console.log(item.data);
    return (
        <div> 

        <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../assets/css/icons.min.css" />
        <link rel="stylesheet" href="../assets/css/plugins.css" />
        <link rel="stylesheet" href="../assets/css/style.css" />
        <script src="../assets/js/vendor/modernizr-2.8.3.min.js"></script>

            <Header />
            
            <div className="product-details-area pt-100 pb-95">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="product-details-img">
                                <div className="zoompro-border zoompro-span">
                                    <img className="zoompro" src={`http://localhost:4444/uploads/${item.data.image}`} alt={item.name || ''} /><span>-29%</span>
                                </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="product-details-content ml-30">
                        <h2>{item.data.name}</h2>
                        <div className="product-details-price">
                            <span>{`${item.data.price}.00 $`}</span>
                            <span className="old">{`${item.data.old_price}.00 $`}</span>
                        </div>
                        <div className="pro-details-rating-wrap">
                            <div className="pro-details-rating">
                                <i className="sli sli-star yellow"></i>
                                <i className="sli sli-star yellow"></i>
                                <i className="sli sli-star yellow"></i>
                                <i className="sli sli-star yellow"></i>
                                <i className="sli sli-star yellow"></i>
                            </div>
                            <span><a href="#">3 Reviews</a></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                        <div className="pro-details-list">
                            <ul>
                                <li>- 0.5 mm Dail</li>
                                <li>- Inspired vector icons</li>
                                <li>- Very modern style  </li>
                            </ul>
                        </div>
                        <div className="pro-details-size-color">
                            <div className="pro-details-color-wrap">
                                <span>Color</span>
                                <div className="pro-details-color-content">
                                    <ul>
                                        <li className="blue"></li>
                                        <li className="maroon active"></li>
                                        <li className="gray"></li>
                                        <li className="green"></li>
                                        <li className="yellow"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pro-details-size">
                                <span>Size</span>
                                <div className="pro-details-size-content">
                                    <ul>
                                        <li><a href="#">s</a></li>
                                        <li><a href="#">m</a></li>
                                        <li><a href="#">l</a></li>
                                        <li><a href="#">xl</a></li>
                                        <li><a href="#">xxl</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="pro-details-quality">
                            <div className="cart-plus-minus">
                                <input className="cart-plus-minus-box" type="text" name="qtybutton" value="2"/>
                            </div>
                            <div className="pro-details-cart btn-hover">
                                <a href="#">Add To Cart</a>
                            </div>
                            <div className="pro-details-wishlist">
                                <a title="Add To Wishlist" href="#"><i className="sli sli-heart"></i></a>
                            </div>
                            <div className="pro-details-compare">
                                <a title="Add To Compare" href="#"><i className="sli sli-refresh"></i></a>
                            </div>
                        </div>
                        <div className="pro-details-meta">
                            <span>Categories :</span>
                            <ul>
                                <li><a href="#">Minimal,</a></li>
                                <li><a href="#">Furniture,</a></li>
                                <li><a href="#">Fashion</a></li>
                            </ul>
                        </div>
                        <div className="pro-details-meta">
                            <span>Tag :</span>
                            <ul>
                                <li><a href="#">Fashion, </a></li>
                                <li><a href="#">Furniture,</a></li>
                                <li><a href="#">Electronic</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>

    <div className="description-review-area pb-95">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8">
                    <div className="description-review-wrapper">
                        <div className="description-review-topbar nav">
                            <a className="active" data-toggle="tab" href="#des-details1">Description</a>
                            <a data-toggle="tab" href="#des-details3">Additional information</a>
                            <a data-toggle="tab" href="#des-details2">Reviews (3)</a>
                        </div>
                        <div className="tab-content description-review-bottom">
                            <div id="des-details1" className="tab-pane active">
                                <div className="product-description-wrapper">
                                    <p>Pellentesque orci lectus, bibendum iaculis aliquet id, ullamcorper nec ipsum. In laoreet ligula vitae tristique viverra. Suspendisse augue nunc, laoreet in arcu ut, vulputate malesuada justo. Donec porttitor elit justo, sed lobortis nulla interdum et. Sed lobortis sapien ut augue condimentum, eget ullamcorper nibh lobortis. Cras ut bibendum libero. Quisque in nisl nisl. Mauris vestibulum leo nec pellentesque sollicitudin.</p>
                                    <p>Pellentesque lacus eros, venenatis in iaculis nec, luctus at eros. Phasellus id gravida magna. Maecenas fringilla auctor diam consectetur placerat. Suspendisse non convallis ligula. Aenean sagittis eu erat quis efficitur. Maecenas volutpat erat ac varius bibendum. Ut tincidunt, sem id tristique commodo, nunc diam suscipit lectus, vel</p>
                                </div>
                            </div>
                            <div id="des-details3" className="tab-pane">
                                <div className="product-anotherinfo-wrapper">
                                    <ul>
                                        <li><span>Weight</span> 400 g</li>
                                        <li><span>Dimensions</span>10 x 10 x 15 cm </li>
                                        <li><span>Materials</span> 60% cotton, 40% polyester</li>
                                        <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="des-details2" className="tab-pane">
                                <div className="review-wrapper">
                                    <div className="single-review">
                                        <div className="review-img">
                                            <img src={client1} alt=""/>
                                        </div>
                                        <div className="review-content">
                                            <p>“In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed viverra nunc erat, a efficitur nibh”</p>
                                            <div className="review-top-wrap">
                                                <div className="review-name">
                                                    <h4>Stella McGee</h4>
                                                </div>
                                                <div className="review-rating">
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-review">
                                        <div className="review-img">
                                            <img src={client2} alt=""/>
                                        </div>
                                        <div className="review-content">
                                            <p>“In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed viverra nunc erat, a efficitur nibh”</p>
                                            <div className="review-top-wrap">
                                                <div className="review-name">
                                                    <h4>Stella McGee</h4>
                                                </div>
                                                <div className="review-rating">
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-review">
                                        <div className="review-img">
                                            <img src={client3} alt=""/>
                                        </div>
                                        <div className="review-content">
                                            <p>“In convallis nulla et magna congue convallis. Donec eu nunc vel justo maximus posuere. Sed viverra nunc erat, a efficitur nibh”</p>
                                            <div className="review-top-wrap">
                                                <div className="review-name">
                                                    <h4>Stella McGee</h4>
                                                </div>
                                                <div className="review-rating">
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                    <i className="sli sli-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ratting-form-wrapper">
                                    <span>Add a Review</span>
                                    <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                                    <div className="star-box-wrap">
                                        <div className="single-ratting-star">
                                            <i className="sli sli-star"></i>
                                        </div>
                                        <div className="single-ratting-star">
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                        </div>
                                        <div className="single-ratting-star">
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                        </div>
                                        <div className="single-ratting-star">
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                        </div>
                                        <div className="single-ratting-star">
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                            <i className="sli sli-star"></i>
                                        </div>
                                    </div>
                                    <div className="ratting-form">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="rating-form-style mb-20">
                                                        <label>Your review <span>*</span></label>
                                                        <textarea name="Your Review"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="rating-form-style mb-20">
                                                       <label>Name <span>*</span></label>
                                                        <input type="text"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="rating-form-style mb-20">
                                                       <label>Email <span>*</span></label>
                                                        <input type="email"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-submit">
                                                        <input type="submit" value="Submit"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="pro-dec-banner">
                        <a href="#"><img src={banner15} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <div className="product-area pb-70">
        <div className="container">
            <div className="section-title text-center pb-60">
                <h2>Related products</h2>
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

            <Footer />

            <script src="../assets/js/vendor/jquery-1.12.4.min.js"></script>
            <script src="../assets/js/popper.min.js"></script>
            <script src="../assets/js/bootstrap.min.js"></script>
            <script src="../assets/js/plugins.js"></script>
            <script src="../assets/js/ajax-mail.js"></script>
            <script src="../assets/js/main.js"></script>
            </div>
    )
}

export default ProductDetails;
