import Header from './Header'
import Footer from './Footer'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'

const BlogDetails = () => {

    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:4444/blog/${id}`)
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

  return (
    <div>
        <Header />
        <div class="breadcrumb-area pt-35 pb-35 bg-gray">
            <div class="container">
                <div class="breadcrumb-content text-center">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li class="active">blog details </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="blog-area pt-100 pb-100">
        <div class="container">
            <div class="row flex-row-reverse">
                <div class="col-lg-12">
                    <div class="blog-details-wrapper ml-20">
                        <div class="blog-details-top">
                            <div class="blog-details-img">
                                <img alt="" src="assets/img/blog/blog-details-4.jpg"/>
                            </div>
                            <div class="blog-details-content">
                                <h3>{item.data.title}</h3>
                                <div class="blog-details-meta">
                                    <ul>
                                        <li>{item.data.title}</li>
                                        <li>{item.data.author}</li>
                                        <li>4 likes</li>
                                    </ul>
                                </div>
                                <p>{item.data.description}</p>
                                <blockquote>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt labo dolor magna aliqua. Ut enim ad minim veniam quis nostrud.</blockquote> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                        <div class="dec-img-wrapper">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="dec-img mb-50">
                                    <img src={`http://localhost:4444/uploads/blog/${item.data.image}`} alt="Universal Product Style" />
                                        {/* <img alt="" src="assets/img/blog/blog-details-2.jpg"/> */}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="dec-img mb-50">
                                    <img src={`http://localhost:4444/uploads/blog/${item.data.image}`} alt="Universal Product Style" />
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div class="tag-share">
                            <div class="dec-tag">
                                <ul>
                                    <li><a href="#">lifestyle ,</a></li>
                                    <li><a href="#">interior ,</a></li>
                                    <li><a href="#">outdoor</a></li>
                                </ul>
                            </div>
                            <div class="blog-share">
                                <span>share :</span>
                                <div class="share-social">
                                    <ul>
                                        <li>
                                            <a class="facebook" href="#">
                                                <i class="sli sli-social-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="twitter" href="#">
                                            <i class="sli sli-social-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="instagram" href="#">
                                                <i class="sli sli-social-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="next-previous-post">
                            <a href="#"> <i class="sli sli-arrow-left"></i> prev post</a>
                            <a href="#">next post <i class="sli sli-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <Footer />
    </div>
  )
}

export default BlogDetails
