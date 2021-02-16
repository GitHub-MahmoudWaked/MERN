import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <Link to={"/products"}>
                        BACK
                    </Link>
            <center>
                    <p><strong>Title:</strong> {product.title}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Product ID:</strong> {product._id}</p>
                    <Link to={"/products/" + product._id + "/edit"}>
                        Edit
                    </Link>
                <hr></hr>
            </center>
        </div>
    )
}