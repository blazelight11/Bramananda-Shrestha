import { Menu } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Left = styled.div`
  background-color: #12477b;
  height: 100%;
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  padding: 0 10px;
  font-size: 24px;
  

  /* @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  } */
`

const Right = styled.div`
  display: flex;
  align-items: center;
  

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: #12477b;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-left: 10px;
  }
`

const Button = styled.button`
  padding: 10px 40px;
  background: #fff;
  border-radius: 5px;
  border-color: #12477b;
  border: 1px solid;
  color: #12477b;
  cursor: pointer;
  transition: all 1s ease;

  &:hover {
    background-color: skyblue;
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`

export const Navbar = () => {
  return (
    <div>
      <Container>
      <Left>
        <StyledLink to={`/`}>
          <Logo>BlazeLight</Logo>
        </StyledLink>
        </Left>
        <Right>
          <MenuItem>
            <Button>Sign in</Button>
          </MenuItem>
          <MenuItem>
            <Menu />
          </MenuItem>
        </Right>
        
      </Container>
    </div>
  )
}
