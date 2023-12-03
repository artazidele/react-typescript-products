import { useState, useEffect } from "react"

function GetProducts() {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const url = 'https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setProducts(res.products)
            setLoading(false)
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })
    }, [url])

    return {products, loading, error};
}

export default GetProducts