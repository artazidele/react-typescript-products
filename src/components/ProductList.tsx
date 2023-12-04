import AllProducts from "./AllProducts"
import GetProducts from '../data/GetProducts';
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ProductList() {
    const {products, loading, error} = GetProducts();

    return (
        <div>
            <Header title="Product list"/>
            <div className="min-h-[75vh] flex flex-col min-w-[320px] absolute mt-48 sm:mt-52 w-full">
                <div className="mx-2 sm:mx-32">
                    <div className="">
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                        {products && <AllProducts products={products} />}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
