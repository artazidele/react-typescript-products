function OneProductDetails({product}) {
    return (
        <div>
            <h4>{product.name}</h4>
            <h6>Price: { product.price } { product.currency }</h6>
            <h6>Category: { product.category }</h6>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default OneProductDetails