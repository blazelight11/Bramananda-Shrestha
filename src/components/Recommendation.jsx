import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { products } from './assets/data/data';

const ImageScrollContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 50px;
  cursor: pointer;


  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

const ImageScrollTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 50%;
  height: 100%;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const DotTracker = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

  @media screen and (max-width: 768px) {
    /* flex-direction: column;
    align-items: center;
    bottom: 20px; */
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) =>
    props.isActive ? "#000" : "rgba(0, 0, 0, 0.2)"};
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 0 5px;
  }
`;

export const Recommendation = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex + 1) % products.length
      );
    }, 7000); // scroll every 7 seconds

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  // const canShowPair = currentImageIndex + 1 < products.length;

  return (
    <ImageScrollContainer>
      <ImageScrollTrack>
        {
          products
            .slice(currentImageIndex, currentImageIndex + 2)
            .map((product) => (
              <Image key={product.id} src={product.cover} />
            ))}
        {
          <Image key={products[currentImageIndex].id} src={products[currentImageIndex].cover} />}
      </ImageScrollTrack>
      <DotTracker>
        {products.map((product, index) => (
          <Dot
            key={product.id}
            isActive={index === currentImageIndex}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </DotTracker>
    </ImageScrollContainer>
  );
};
