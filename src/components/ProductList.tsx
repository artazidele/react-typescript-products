import AllProducts from "./AllProducts"
import GetProducts from '../data/GetProducts';

export function ProductList() {
    const {products, loading, error} = GetProducts();

    return (
        <div>
            <h1>Product list</h1>
            <div>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {products && <AllProducts products={products} />}
            </div>
        </div>
    )
}
