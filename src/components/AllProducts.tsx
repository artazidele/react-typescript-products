import { useState } from "react"
import ProductPage from "./ProductPage"

function AllProducts({products}) {
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [currentPage, setCurrentPage] = useState(1)
    const productsInOnePage = 5
    
    const [currentPageProducts, setCurrentPageProducts] = useState(filteredProducts.slice(0, 5))

    const count = Math.ceil(products.length/productsInOnePage)
    const startCounts = []
    for (let i=0; i<count; i++) {
        startCounts.push(i+1)
    }
    const [counts, setCounts] = useState(startCounts)

    const buttonClciked = (e) => {
        setCurrentPage(e.target.value)
        setCurrentPageProducts(filteredProducts.slice((e.target.value-1)*5, e.target.value*5))
    }

    const inputChanged = (e) => {
        const newProducts = products.filter(product => 
            product.name.toLowerCase().includes(e.target.value))
        const newCount = Math.ceil(newProducts.length/productsInOnePage)
        const newCounts = []
        for (let i=0; i<newCount; i++) {
            newCounts.push(i+1)
        }
        setCounts(newCounts)
        setFilteredProducts(newProducts)
        if (newProducts.length < currentPage*5-4) {
            setCurrentPage(newCount)
            setCurrentPageProducts(newProducts.slice((newCount-1)*5, newCount*5))
        } else {
            setCurrentPageProducts(newProducts.slice((currentPage-1)*5, currentPage*5))
        }
        
    }

    return (
        <div>
            <div className="flex mt-2">
                <h3 className="uppercase text-lg">Search: </h3>
                <input className="rounded border-black border-2 ml-2" type="text" onChange={inputChanged}/>
            </div>
            <div className="mt-4 text-center text-teal-900 text-4xl">* * *</div>
            <ProductPage products={currentPageProducts}/>
            <div className="mb-4 text-center">{counts.map((oneCount) => (
                <button className="m-2 border-teal-900 border-2 rounded inline block py-2 px-4" value={oneCount} key={oneCount} onClick={buttonClciked}>{ oneCount }</button>
            ))}</div>
        </div>
    )
}

export default AllProducts