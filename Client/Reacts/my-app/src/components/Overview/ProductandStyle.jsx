import react from 'react'
import {useState} from 'react'
import styled from "styled-components"


const NameStyleDIV = styled.div`
display:flex:
flex-direction:column;
border: 2px solid green;
width: 30%;
`
const TopDIV = styled.div`
display:contents;
border: 1px solid grey;
height: 33.3%;
width: 100%;
`
const MidDIV = styled.div`
display:flex;
flex-direction: column;
border: 1px solid grey;
height: 33.3%;
width: 100%;
`
const BottomDIV = styled.div`
border: 1px solid grey;
height: 25%;
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
padding-top: 20px;
`
const StylesDIV = styled.div`
margin-top: 35px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
const Dropbtn = styled.div`
  display: inline-block;
  background-color: #e7dede;
  color: #25210c;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border: 1px solid black;
`;



const ProductandStyle = () => {
  return (
    <NameStyleDIV>
      <TopDIV>
        <h3>⭐️⭐️⭐️⭐️⭐️</h3>
        <h5>CATEGORY</h5>
        <h1>PRODUCT NAME</h1>
        <h5>Price</h5>
      </TopDIV>
      <MidDIV>
        <h2>Style Selector</h2>
        <StylesDIV>
          <span>IMG</span>
          <span>IMG</span>
          <span>IMG</span>
          <span>IMG</span>
          <span>IMG</span>
          <span>IMG</span>
        </StylesDIV>
      </MidDIV>
      <BottomDIV>
        <Dropbtn>SIZE DROPDOWN MENU</Dropbtn>
        <Dropbtn>Quantity</Dropbtn>
        <Dropbtn>ADD TO BAG</Dropbtn>
        <Dropbtn>🌟</Dropbtn>
      </BottomDIV>
    </NameStyleDIV>

  )
}

export default ProductandStyle;