import OneProductDetails from "./OneProductDetails"
import GetProducts from '../data/GetProducts';
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ProductDetails() {
    const id = window.location.href.split('/')[4]
    const {products, loading, error} = GetProducts();

    return (
        <div>
            <Header title="Product details"/>
            <div className="min-w-[320px] absolute mt-48 sm:mt-52 w-full">
                <div>
                    <Link to="..">Home</Link>
                </div>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {products && <OneProductDetails product={products.find((product) => product.id == id)}/>}
                <Footer />
            </div>
        </div>
    )
}