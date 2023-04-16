import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../components/assets/data/data';
import styled from 'styled-components';

const Heading = styled.div`
  text-align: center;
  margin: 20px;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 10px;
`;

const Product = styled.div`
  margin: 2rem;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Category = () => {
  const { category } = useParams();
  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <Heading>
        <h2>Category for {category}</h2>
      </Heading>
      <ProductsContainer>
        {categoryProducts.map((product) => (
          <Product key={product.id}>
            {product.qty >= 1 && (
              <>
                <ProductImage src={product.cover} alt={product.title} />
                <ProductTitle>{product.title}</ProductTitle>
                <p>{product.author}</p>
                <p> Category: {product.category}</p>
                <p>Stock: {product.qty}</p>
              </>
            )}
          </Product>
        ))}
      </ProductsContainer>
    </div>
  );
};
