import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Contact = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4444';
        try {
            const response = await axios.post(`${apiUrl}/contactForm`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                navigate('/');
            }
        } catch (error) {
            console.log("Hata veriyor");
            console.error('Form submission failed', error);
        }
    }

  return (
    <div>
            <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="../assets/css/icons.min.css" />
            <link rel="stylesheet" href="../assets/css/plugins.css" />
            <link rel="stylesheet" href="../assets/css/style.css" />
            <script src="../assets/js/vendor/modernizr-2.8.3.min.js"></script>
            <Header />
            <div className="contact-area pt-100 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <div className="contact-info-area">
                        <h2>Get In Touch</h2>
                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elituis. </p>
                        <div className="contact-info-wrap">
                            <div className="single-contact-info">
                                <div className="contact-info-icon">
                                    <i className="sli sli-location-pin"></i>
                                </div>
                                <div className="contact-info-content">
                                    <p>Address goes here,  street, Crossroad 123.</p>
                                </div>
                            </div>
                            <div className="single-contact-info">
                                <div className="contact-info-icon">
                                    <i className="sli sli-envelope"></i>
                                </div>
                                <div className="contact-info-content">
                                    <p><a href="#">info@example.com</a> / <a href="#">info@example.com</a></p>
                                </div>
                            </div>
                            <div className="single-contact-info">
                                <div className="contact-info-icon">
                                    <i className="sli sli-screen-smartphone"></i>
                                </div>
                                <div className="contact-info-content">
                                    <p>+1 35 776 859 000  /  +1 35 776 859 011</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className="contact-from contact-shadow">
                        <form onSubmit={handleSubmit}>
                            <input name="name" type="text" placeholder="Name" />
                            <input name="email" type="email" placeholder="Email" />
                            <input name="subject" type="text" placeholder="Subject"  />
                            <textarea name="message" placeholder="Your Message"  ></textarea>
                            <button className="submit" type="submit">Send Message</button>
                        </form>
                        <p className="form-messege"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <Footer />
    </div>
)
}

export default Contact
