import React, { useState } from "react";
import styled from "styled-components";
import { products } from "./assets/data/data";
import { Link } from "react-router-dom";


const Heading = styled.div`
  text-align: center;
  margin: 20px;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 700px){
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Product = styled.div`
  margin-bottom: 2rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const ProductTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const LoadContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoadMoreButton = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

export const ProductList = () => {
  const [numToShow, setNumToShow] = useState(5);
  const productsToShow = products.slice(0, numToShow);

  const handleLoadMore = () => {
    setNumToShow(numToShow + 5);
  };

  const handleLoadLess = () => {
    setNumToShow(numToShow - 5);
  };

  return (
    <>
      <Heading>
        <h2>Search by Category</h2>
      </Heading>
      <ProductsContainer>
        {productsToShow.map((product) => (
          <Product key={product.id}>
            <Link to={`/category/${product.category}`}>
              <ProductImage src={product.cover} alt={product.title} />
            </Link>
            <ProductTitle>{product.title}</ProductTitle>
            <p>{product.author}</p>
          </Product>
        ))}
      </ProductsContainer>
      <LoadContainer>
        {numToShow < products.length ? (
          <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
        ) : (
          <LoadMoreButton onClick={handleLoadLess}>Load Less</LoadMoreButton>
        )}
      </LoadContainer>
    </>
  );
};
