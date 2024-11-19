import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {

    const [data,setData] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const setVisibleFilter = (id) => {
        setSelectedCategory(id);
        setFilteredProducts(data.filter(product => product.categoryid === id));
    }

    const handleProductClick = (item) => {
        localStorage.setItem('selectedProduct', JSON.stringify(item));
    };

    useEffect(() => {
            axios.get('http://localhost:4444/productData')
                .then(response => {
                    // console.log('API Response:', response.data);
                    if (Array.isArray(response.data)) {
                        setData(response.data);
                        setFilteredProducts(response.data.filter(product => product.categoryid === selectedCategory));
                    } else {
                        console.error('Expected an array but got:', typeof response.data);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            axios.get('http://localhost:4444/categoryData')
            .then(response => {
                // console.log('API Response:', response.data);
                if (Array.isArray(response.data)) {
                    setCategory(response.data);
                } else {
                    console.error('Expected an array but got:', typeof response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

return (
        <div className="product-area pb-70">

            <div className="container">
                <div className="section-title text-center pb-40">
                    <h2>All Products</h2>
                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical</p>
                </div>

                <div className="product-tab-list nav pb-60 text-center">
                    {category.length > 0 && category.map((item) => (
                            <div key={item.id} onClick={() => setVisibleFilter(item.id)} style={{ cursor: 'pointer' }}>
                                <a className={`${selectedCategory === item.id ? 'active' : ''}`}>
                                    <h4>{item.name}</h4>
                                </a>
                            </div>
                    ))}
                </div>

                <div className="tab-content jump-2">
                
                    <div className="tab-pane active">

                        <div className="ht-products product-slider-active owl-carousel owl-drag owl-loaded d-flex">

                            {filteredProducts.length > 0 && filteredProducts.map((item, index) => (
                                <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30 mr-2" key={index}>
                                    <div className="ht-product-inner">
                                        <div className="ht-product-image-wrap">
                                            <Link to={`/product/${item.id}`} onClick={() => handleProductClick(item)} style={{ width: '300px' , height: '300px' }} className="ht-product-image">
                                            {/* width: '268px' */}
                                                <img src={`http://localhost:4444/uploads/${item.image}`} alt="Universal Product Style" />
                                            </Link>
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
                                                <div className="ht-product-categories"><Link to={`/product/${item.id}`}>Chair</Link></div>
                                                <h4 className="ht-product-title"><Link to={`/product/${item.id}`}>{item.name}</Link></h4>
                                                <div className="ht-product-price">
                                                    <span className="new">{`${item.price}.00 AZN`}</span>
                                                    <span className="old">{`${item.old_price}.00 AZN`}</span>
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
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
            </div>
        </div>

        <script src="../assets/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="../assets/js/popper.min.js"></script>
        <script src="../assets/js/bootstrap.min.js"></script>
        <script src="../assets/js/plugins.js"></script>
        <script src="../assets/js/ajax-mail.js"></script>
        <script src="../assets/js/main.js"></script>
        </div>
  )
}

export default Products
