import { Link } from "react-router-dom"

export function Product({product}) {
    return (
        <div>
            <Link to={`/products/${ product.id}`}>
                <h4>{product.name}</h4>
                <h6>Price: { product.price } { product.currency }</h6>
                <h6>Category: { product.category }</h6>
            </Link>
        </div>
    )
}

export default Product