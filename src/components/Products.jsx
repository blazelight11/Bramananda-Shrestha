import React, { useState } from 'react'
import { products } from './assets/data/data'
import { ProductItem } from './ProductItem'
import styled from 'styled-components'

const Products = styled.section`
    margin: 50px;
`

const Heading = styled.div`
    text-align: center;
    margin: 20px;
`


export const Product = () => {
    const [data, setData] = useState(products)
    console.log(setData);
  return (
    <div>
        <Products>
            <div className="container">
                <Heading>
                    <h2>Treding Products</h2>
                    <p>Check the hottest designs of the week. These rising stars are worth your attention.</p>
                </Heading>
                <ProductItem data={data} />
            </div>
        </Products>
        </div>
  )
}
