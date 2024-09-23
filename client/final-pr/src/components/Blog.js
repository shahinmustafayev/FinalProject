import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {

    const [blogs,setBlogData] = useState([]);
    const handleBlogClick = (item) => {
        localStorage.setItem('selectedBlog', JSON.stringify(item));
    };

    useEffect(() => {
        axios.get('http://localhost:4444/blogData')
            .then(response => {
                console.log('API Response:', response.data);
                if (Array.isArray(response.data.data)) {
                    setBlogData(response.data.data);
                } else {
                    console.error('Expected an array but got:', typeof response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

  return (
    <div class="blog-area pt-50 pb-65">
        <div class="container">
                <div class="section-title text-center pb-60">
                    <h2>New Blog Posts</h2>
                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
                </div>
                <div class="row">
                {blogs.length > 0 ? (
                                blogs.map((item, index) => (
                                <div class="col-lg-6 col-md-6">
                                    <div className="blog-wrap mb-30 mr-20 text-center scroll-zoom" key={index}>
                                        <div className="blog-img mb-25">
                                            <Link to={`/blog/${item.id}`} onClick={() => handleBlogClick(item)} style={{ width: '268px' , height: '268px' }} className="ht-product-image">
                                                {item && item.image ? (
                                                    <img src={`http://localhost:4444/uploads/blog/${item.image}`} alt="Universal Product Style" />
                                                    ) : (
                                                        <p>Image not available</p>
                                                    )}
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <h3><Link to={`/blog/${item.id}`} onClick={() => handleBlogClick(item)}>{item.title}</Link></h3>
                                            <div className="blog-meta blog-mrg-border">
                                                <ul>
                                                    <li><Link to={`/blog/${item.id}`} onClick={() => handleBlogClick(item)}>{item.date.split("T")[0]}</Link></li>
                                                    <li><Link to={`/blog/${item.id}`} onClick={() => handleBlogClick(item)}> {item.author} </Link></li>
                                                    <li><Link to={`/blog/${item.id}`} onClick={() => handleBlogClick(item)}>4 likes</Link></li>
                                                </ul>
                                            </div>
                                            <Link to={`/blog/${item.id}`} onClick={() => handleBlogClick(item)}><p>{item.description}</p></Link>
                                        </div>
                                    </div>
                                </div>
                ))
                ) : (
                    <p>No blog data available.</p>
                )}

             </div>
        
        </div>
    </div>
  )
}

export default Blog
