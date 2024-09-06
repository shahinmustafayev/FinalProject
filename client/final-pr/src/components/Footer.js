import React from 'react'
import payment from '../assets/img/icon-img/payment.png'
// import quickviewl1 from '../assets/img/product/quickview-l1.jpg'
// import quickviewl2 from '../assets/img/product/quickview-l2.jpg'
// import quickviewl3 from '../assets/img/product/quickview-l3.jpg'
// import quickviews1 from '../assets/img/product/quickview-s1.jpg'
// import quickviews2 from '../assets/img/product/quickview-s2.jpg'
// import quickviews3 from '../assets/img/product/quickview-s3.jpg'

const Footer = () => {
    return (
        <div>
            <footer class="footer-area bg-paleturquoise">
        <div class="container">
            <div class="footer-top text-center pt-45 pb-45">
                <nav>
                    <ul>
                        <li><a href="index.html">Home </a></li>
                        <li><a href="shop.html">Shop </a></li>
                        <li><a href="shop.html">Accessories  </a></li>
                        <li><a href="contact-us.html">Contact </a></li>
                        <li><a href="about-us.html">About </a></li>
                        <li><a href="blog.html">Blog </a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="footer-bottom border-top-1 pt-20">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-5 col-12">
                        <div class="footer-social pb-20">
                            <a href="#">Facebok</a>
                            <a href="#">Twitter</a>
                            <a href="#">Linkedin</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="copyright text-center pb-20">
                            <p>Copyright © All Right Reserved</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-3 col-12">
                        <div class="payment-mathod pb-20">
                            <a href="#"><img src={payment} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
   
        </div>
    )
}

export default Footer;