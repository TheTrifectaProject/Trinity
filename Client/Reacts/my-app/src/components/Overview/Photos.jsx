import react from 'react'
import {useState} from 'react'
import styled from "styled-components"
import { UilAngleRight } from '@iconscout/react-unicons'
import { UilAngleLeft } from '@iconscout/react-unicons'



const PhotosDIV = styled.div`
display:flex;
padding-right: 25px;
flex-direction: row;
justify-content: start;
width: 60%;
/* background-color: #db1b1b13; */
`

const PhotoGallery = styled.div`
overflow: hidden;
padding-top: 25px;
margin-left: 20px;
display:flex;
flex-direction: column;
align-items: center;
width: 18%;
overflow-y: auto;
height: 90%;
/* border-right: .5px solid black; */
`
const GalleryPhoto = styled.img`
border: 1px solid black;
height 66px;
width 41px;
margin-left: 10px;
margin-bottom: 30px;
box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, .7);
&:hover {
  box-shadow: 10px 10px 10px 0 rgba(249, 83, 174, 0.371);
  cursor: pointer;
    }
`

const MainDisplay = styled.div`
display: flex;
align-items: center;
margin-left:8%; ;
width:100%;`

const MainPhoto = styled.img`
height: auto;
width: 382px;;
box-shadow: 0 5px 5px 5px rgba(0, 0, 0, .2);
`

const Photos = ({photos, mainPhoto, updateMainPhoto, setphotoIndex, photoIndex}) => {

  const photoInc = () => {
    if (photoIndex === photos.length -1) {
      setphotoIndex(0);
    } else {
      let newIndex = photoIndex + 1;
      setphotoIndex(newIndex);
    }

  }

  const photoDec = () => {
    if (photoIndex === 0) {
      setphotoIndex(photos.length -1);
    } else {
      let newIndex = photoIndex - 1;
      setphotoIndex(newIndex);
    }

  }

  if (!photos) {
    return null;
  }
  return (
    <PhotosDIV>

      <PhotoGallery>
        {photos.map((photo, i) => {
          return (
          <GalleryPhoto onClick={() => {updateMainPhoto(photo, i)}} src={photo.thumbnail_url} />
        )
      })}
      </PhotoGallery>
      <MainDisplay>
        <UilAngleLeft onClick={photoDec}size='45'/>
        <MainPhoto src={photos[photoIndex].url} />
        <UilAngleRight onClick={photoInc}size='45'/>
      </MainDisplay>

    </PhotosDIV>
  )
}

export default Photos;