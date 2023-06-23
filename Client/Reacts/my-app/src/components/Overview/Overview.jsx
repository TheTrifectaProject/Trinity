import react from 'react'
import {useState} from 'react'
import styled from "styled-components"
import ProductandStyle from "./ProductandStyle.jsx"

const OverviewDIV = styled.div`
display:flex;
flex-direction: column;
margin-top: 45px;
height:775px;
border: 1px solid black;
margin-bottom: 20px;
margin-left: 75px;
margin-right: 75px;
`
const TopDIV = styled.div`
display:flex;
border: 1px solid red;
height:80%;
`

const BottomDIV = styled.div`
border: 1px solid blue;
display:flex;
flex-direction:column;
justify-content: center;
margin-top: 25px;
margin-left: 90px;
margin-right: 90px;
height:20%;
`
const PhotoDIV = styled.div`
display:flex;
flex-direction: row;
justify-content: start;
border: 1px solid green;
width: 70%;
margin-left: 2px;
`
const PhotoGallery = styled.div`
display:flex;
border: 1px solid green;
flex-direction: column;
justify-content: center;
width: 15%;
`
const MainDisplay = styled.div`
width:100%;
border: 3px solid pink;`

const Photo = styled.div`
border: 2.5px solid orange;
height 65px;
width 65px;
margin-left: 15px;
margin-bottom: 40px;
`

const Overview = () => {
  return (
    <OverviewDIV>

      <TopDIV>
        <PhotoDIV>
          <PhotoGallery>PHOTO GALLERY
            <Photo>IMG TAG</Photo>
            <Photo>IMG TAG</Photo>
            <Photo>IMG TAG</Photo>
            <Photo>IMG TAG</Photo>
            </PhotoGallery>
            <MainDisplay>MAIN DISPLAY</MainDisplay>
        </PhotoDIV>
        <ProductandStyle />
      </TopDIV>

      <BottomDIV>
        <h2>Product Description / Slogan</h2>
        <p>Description</p>
      </BottomDIV>

    </OverviewDIV>
  )
}

export default Overview;