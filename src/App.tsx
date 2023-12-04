import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ProductList } from './components/ProductList'
import { ProductDetails } from './components/ProductDetails'

// As learning materials and code examples I used these videos:
// https://www.youtube.com/watch?v=zR5FoKMAJp4
// https://www.youtube.com/watch?v=gUwHvHyb7Tw
// https://www.youtube.com/watch?v=jBQ7Po2607M
// https://www.youtube.com/watch?v=-ONUyenGnWw
// https://www.youtube.com/watch?v=kVeOpcw4GWY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=2
// https://www.youtube.com/watch?v=9D1x7-2FmTA&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=3
// https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4
// https://www.youtube.com/watch?v=0sSYmRImgRY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=5
// https://www.youtube.com/watch?v=NbTrGcz4DW8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=6
// https://www.youtube.com/watch?v=0XSDAup85SA&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=7
// https://www.youtube.com/watch?app=desktop&v=4pO-HcG2igk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=8

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
