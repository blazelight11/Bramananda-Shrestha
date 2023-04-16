import React from 'react'
import { SearchBar } from '../components/SearchBar'
import { Recommendation } from '../components/Recommendation'
import { Product} from '../components/Products'
import { ProductList } from '../components/ProductList'

export const Home = () => {
  return (
    <div>
        <SearchBar />
        <Recommendation />
        <Product />
        <ProductList />
    </div>
  )
}
