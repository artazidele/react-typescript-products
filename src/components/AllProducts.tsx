import { useState } from "react"
import Product from "./Product"

function AllProducts({products}) {
    const [filteredProducts, setFilteredProducts] = useState(products)
    return (
        <div>
            <input type="text" onChange={(e) => {
                setFilteredProducts(products.filter(product => 
                    product.name.includes(e.target.value) || product.name.includes(e.target.value[0].toUpperCase())))
            }}/>
            <div>{filteredProducts.map((product) => <Product product={product} key={product.id} />)}</div>
        </div>
    )
}

export default AllProducts