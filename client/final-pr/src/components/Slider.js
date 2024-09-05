import {React} from 'react'
import slider1 from '../assets/img/slider/slider-hm1-1.png'
import slider2 from '../assets/img/slider/slider-hm1-2.png'
import banner1 from '../assets/img/banner/banner-1.png'
import banner2 from '../assets/img/banner/banner-2.png'
import banner3 from '../assets/img/banner/banner-3.png'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const Slider = () => {

    // const owlRef = useRef();
    //     useEffect(() => {
    //         owlRef.current.next();
    // }, []);

    return (
        <div className="slider-area section-padding-1">
            <OwlCarousel
                className="slider-active owl-carousel nav-style-1"
                loop={true}
                nav={true}
                items={1}
                autoplay={true}
                autoplayTimeout={4000}
                // ref={owlRef}
                navText={['<i class="sli sli-arrow-left"></i>','<i class="sli sli-arrow-right"></i>']}
            >
                <div className="single-slider slider-height-1 bg-paleturquoise item">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                <div className="slider-content slider-animated-1">
                                    <h1 className="animated">Wooden Craft</h1>
                                    <p className="animated">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader.</p>
                                    <div className="slider-btn btn-hover">
                                        <a className="animated" href="shop.html">Shop Now <i className="sli sli-basket-loaded"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                <div className="slider-single-img slider-animated-1">
                                    <img className="animated" src={slider1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slider slider-height-1 bg-paleturquoise item">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                <div className="slider-content slider-animated-1">
                                    <h1 className="animated">Wooden Craft</h1>
                                    <p className="animated">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader.</p>
                                    <div className="slider-btn btn-hover">
                                        <a className="animated" href="shop.html">Shop Now <i className="sli sli-basket-loaded"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                                <div className="slider-single-img slider-animated-1">
                                    <img className="animated" src={slider2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="owl-controls">
                    <div class="owl-nav">
                        <div class="owl-prev">prev</div>
                        <div class="owl-next">next</div>
                    </div>
                    {/* <div class="owl-dots">
                        <div class="owl-dot active"><span></span></div>
                        <div class="owl-dot"><span></span></div>
                        <div class="owl-dot"><span></span></div>
                    </div> */}
                </div>
            </OwlCarousel>

            <div class="banner-area pt-100 pb-65">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="single-banner mb-30 scroll-zoom">
                                <a href="product-details.html"><img class="animated" src={banner1} alt="" /></a>
                                <div class="banner-content banner-position-1">
                                    <h3>35% off <br/>Black Monday</h3>
                            <h2>Lighting For <br/> Home.</h2>
                                <a href="product-details.html">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single-banner mb-30 scroll-zoom">
                                <a href="product-details.html"><img class="animated" src={banner2} alt=""/></a>
                                <div class="banner-content banner-position-2">
                                    <h3>15% off</h3>
                                    <h2>Table Shiner <br/>Moving.</h2>
                                    <a href="product-details.html">Shop Now</a>
                                </div>
                            </div>
                            <div class="single-banner mb-30 scroll-zoom">
                                <a href="product-details.html"><img class="animated" src={banner3} alt=""/></a>
                                <div class="banner-content banner-position-2">
                                    <h3>Black Friday</h3>
                                    <h2>Wall Lighting <br/>Black.</h2>
                                    <a href="product-details.html">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Slider