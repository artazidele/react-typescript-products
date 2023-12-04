import { Link } from "react-router-dom"

export function Product({product}) {
    return (
        <div className="p-2 relative block border-teal-900 my-4 border-2 rounded">
            <Link to={`/products/${ product.id}`}>
                <h4 className="mb-2 uppercase font-semibold">{product.name}</h4>
                <div className="block sm:flex">
                    <h6>Price: { product.price } { product.currency }</h6>
                    <div className="flex mb-2 sm:absolute sm:right-4 sm:bottom-0">
                        <h6 className="hidden sm:block mr-1">Category: </h6>
                        <h6 className="italic sm:not-italic">{ product.category }</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product