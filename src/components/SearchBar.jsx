import { Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import work1 from './assets/images/work-1.png'
import work2 from './assets/images/work-2.png'
import work3 from './assets/images/work-3.png'
import { SearchItems } from './SearchItems'
import { products } from './assets/data/data'

const Container = styled.div`
    height: 50vh;
    background-color: skyblue;
    display: flex;
    flex-wrap: wrap;
    width: auto;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchContainer = styled.div`
    width: 450px;
    border: 1px solid;
`

const SearchBox = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
`

const Input = styled.input`
    border: none;
    outline: none;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 500;
`

const SearchButton = styled.div`
    position: absolute;
    top:0;
    right: 0;
    width: 15%;
    height: 100%;
    background: #7690da;
    z-index: 1;
    cursor: pointer;
`

const SearchIcon = styled(Search)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    height: 200px;
    width: 400px;
    object-fit: cover;
    margin-right: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;

export const SearchBar = () => {
    const [value, setValue] = useState("")

    const onSearch = (key) =>{
        setValue(key)
        console.log("search",key)
    }

    const [imageIndex, setImageIndex] = useState(0);
    const images = [ work1, work2,  work3 ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((imageIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [imageIndex, images.length]);

    return (
        <div>
            <Container>
                <Left>
                    <SearchContainer>
                        <SearchBox>
                            <Input placeholder="Search..." onChange={(e) => setValue(e.target.value)} />
                        <SearchButton onClick={() => onSearch(value)}>
                            <SearchIcon />
                        </SearchButton>
                        </SearchBox>
                    </SearchContainer>
                </Left>
                <Right>
                    <Image src={images[imageIndex]} />
                </Right>
            </Container>
            <SearchItems product={products} value={value}/>
        </div>
    )
}


