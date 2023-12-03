import OneProductDetails from "./OneProductDetails"
import GetProducts from '../data/GetProducts';
import { Link } from "react-router-dom";

export function ProductDetails() {
    const id = window.location.href.split('/')[4]
    const {products, loading, error} = GetProducts();

    return (
        <div>
            <div>
                <Link to="..">Home</Link>
                <h1>Product details</h1>
            </div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {products && <OneProductDetails product={products.find((product) => product.id == id)}/>}
        </div>
    )
}