import react from 'react'
import {useState} from 'react'
import styled from "styled-components"


const PhotosDIV = styled.div`
display:flex;
padding-right: 25px;
flex-direction: row;
justify-content: start;
width: 60%;
background-color: #80808027;
`

const PhotoGallery = styled.div`
padding-top: 25px;
display:flex;
flex-direction: column;
align-items: center;
width: 15%;
`
const GalleryPhoto = styled.img`
border: 1px solid black;
height 58px;
width 40px;
margin-left: 15px;
margin-bottom: 30px;
box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .7);
&:hover {
  box-shadow: 10px 10px 10px 0 rgb(94, 137, 255);
  cursor: pointer;
    }
`

const MainDisplay = styled.div`
display: flex;
align-items: center;
width:100%;`

const MainPhoto = styled.img`
height: 95%;
width: 375px;
margin-left: 15%;
box-shadow: 0 5px 5px 5px rgba(0, 0, 0, .2);
`

const Photos = ({photos, mainPhoto, updateMainPhoto}) => {

  if (!photos) {
    return null;
  }
  return (
    <PhotosDIV>

      <PhotoGallery>
        {photos.map((photo) => {
          return (
          <GalleryPhoto onClick={() => {updateMainPhoto(photo)}} src={photo.thumbnail_url} />
        )
      })}
      </PhotoGallery>
      <MainDisplay>
        <MainPhoto src={mainPhoto.url} />
      </MainDisplay>

    </PhotosDIV>
  )
}

export default Photos;