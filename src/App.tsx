import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ProductList } from './components/ProductList'
import { ProductDetails } from './components/ProductDetails'

// https://tailwind.build/classes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
