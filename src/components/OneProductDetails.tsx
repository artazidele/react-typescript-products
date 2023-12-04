function OneProductDetails({product}) {
    return (
        <div>
            <h4 className="text-xl mb-8 mt-16 uppercase font-semibold">{product.name}</h4>
            <h6>Price: { product.price } { product.currency }</h6>
            <h6>Category: { product.category }</h6>
            <h6 className="mt-8">Description:</h6>
            <p className="mb-16">{product.description}</p>
        </div>
    )
}

export default OneProductDetails