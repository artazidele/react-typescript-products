import Product from "./Product"

function ProductPage({products}) {
    return (
        <div>
            <div>{products.map((product) => <Product product={product} key={product.id} />)}</div>
        </div>
    )
}

export default ProductPage