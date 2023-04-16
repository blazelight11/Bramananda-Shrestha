// import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import styled from 'styled-components'

const SearchItem = styled.section`
    padding: 0
`

const ProductItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: -25px;
    background: #fff;
    border-radius: 0 0 30px 30px;
    width: 100%;
`

const Box = styled.div`
    padding: 20px;
`


const Imgs = styled.img`
    width: 100%;
    height: 100%;
    background: none;
    color: none;
    border-radius: 20px;
    padding: none;
`
const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: center;
    content: "";
    position: absolute;
    top: none;
    bottom: 40px;
    left: 0;
    right: none;
    width: 100%;
    height: auto;
    opacity: 0;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    transform: translateY(0);

    /* &:hover {
        opacity: 1;
        transform: translateY(-30%);
    } */
`

const Img = styled.div`
    position: relative;

    &:hover ${Overlay} {
        opacity: 1;
        transform: translateY(-30%);
    }
`

const Button = styled.button`
    width: 50px;
    height: 50px;
    background: #fff;
    color: #0a2748;
    border-radius: 50%;
    padding: none;
    font-size: 20px;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    margin: 5px;

    &:hover{
        background: #ff5400;
        color: #fff;
    }
`

const Details = styled.div`
    text-align: center;
`

export const SearchItems = ({product, value}) => {

    const searchItem = product.filter((items)=> {
                const searchkey = value.toLowerCase()
                const title = items.title.toLowerCase()

                return searchkey && title.startsWith(searchkey) && title !== searchkey
            })

  return (
    <div>
        <SearchItem>
        <ProductItems>
            { searchItem
            .slice(0,10).map((items) => (
                    <Box key={items.id}>
                        <Img>
                            <Imgs src={items.cover} alt="" />
                            <Overlay>
                                <Button>
                                    <FiShoppingBag />
                                </Button>
                                <Button>
                                    <AiOutlineHeart />
                                </Button>
                                <Button >
                                    <FiSearch />
                                </Button>
                            </Overlay>
                        </Img>
                        <Details>
                            <h3>{items.title}</h3>
                            <p>{items.author}</p>
                            <h4>Price: ${items.price}</h4>
                        </Details>
                    </Box>
                ))}
        </ProductItems>
        </SearchItem>
    </div>
  )
}
