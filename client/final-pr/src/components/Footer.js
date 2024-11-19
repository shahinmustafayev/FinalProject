import React from 'react'
import payment from '../assets/img/icon-img/payment.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer-area bg-paleturquoise">
        <div className="container">
            <div className="footer-top text-center pt-45 pb-45">
                <nav>
                    <ul>
                        <li><a href="/">Home </a></li>
                        <li><a href="/">Shop </a></li>
                        <li><a href="/">Accessories  </a></li>
                        <li><a href="/contact">Contact </a></li>
                        <li><a href="/">Pages </a></li>
                        <li><a href="/">Blog </a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="footer-bottom border-top-1 pt-20">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="footer-social pb-20">
                            <a href="/">Facebok</a>
                            <a href="/">Twitter</a>
                            <a href="/">Linkedin</a>
                            <a href="/">Instagram</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="copyright text-center pb-20">
                            <p>Codelandia Mern Stack Final Project 2024</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-12">
                        <div className="payment-mathod pb-20">
                            <a href="/"><img src={payment} /></a>
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
