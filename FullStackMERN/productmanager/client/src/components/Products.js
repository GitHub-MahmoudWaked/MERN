import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
            <div>
                <center>
                    {props.products.map((product, index) => {
                        return <p key={index}>
                            <Link to={"/products/" + product._id}>
                                <h2><strong>{product.title}</strong></h2>
                            </Link>
                            <button onClick={(e)=>{deleteProduct(product._id)}}>
                                Delete
                            </button>
                            <hr></hr>
                        </p>
                    })}
                </center>
            </div>
        )
    }