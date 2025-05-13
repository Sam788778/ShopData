import './App.css'
import { Route, Routes } from 'react-router-dom'
import Container from './components/container/container'
import Home from './components/home/home'
import Products from './components/products/products'
import Product from './components/product/product'

function App({ products }) {
  return (
    <>
      <Routes>
        <Route path='/' element={<Container products={products} />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products} />} />
          <Route path='/products/:id' element={<Product products={products} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App