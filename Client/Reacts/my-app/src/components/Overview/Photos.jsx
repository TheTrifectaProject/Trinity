import react from 'react'
import {useState} from 'react'
import styled from "styled-components"
import { UilAngleRight } from '@iconscout/react-unicons'
import { UilAngleLeft } from '@iconscout/react-unicons'



const PhotosDIV = styled.div`
display:flex;
/* overflow-y: scroll; */
/* position: fixed; */
flex-direction: row;
justify-content: start;
width: 60%;
/* background-color: #db1b1b13; */
`

const PhotoGallery = styled.div`
overflow: hidden;
overflow-y: scroll;
padding-top: 25px;
display:flex;
margin-top: 21px;
flex-direction: column;
margin-left:20px;
width: 100%;
height: 75%;
overflow-y: auto;
/* height: 90%; */
/* border-right: .5px solid black; */
`
const GalleryPhoto = styled.img`
border: 1px solid black;
height 72px;
width 43px;

margin-bottom: 30px;
box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, .7);
`

const CurrentGalleryPhoto = styled.img`
border: 1px solid black;
height 72px;
width 43px;
margin-bottom: 30px;
box-shadow: 9px 9px 9px 0 rgba(0, 112, 187, 0.916);
`

const MainDisplay = styled.div`
display: flex;
align-items: center;
/* height: auto; */
margin-left: -60%;
width: 90%;`

const MainPhoto = styled.img`
height: auto;
width: 410px;
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
          if (photo !== mainPhoto) {
           return (
          <GalleryPhoto onClick={() => {updateMainPhoto(photo, i)}} src={photo.thumbnail_url} />
        )
          } else {
            return (
              <CurrentGalleryPhoto onClick={() => {updateMainPhoto(photo, i)}} src={photo.thumbnail_url}  />
            )
          }
      })}
      </PhotoGallery>
      <MainDisplay>
        <UilAngleLeft onClick={photoDec}size='65'/>
        <MainPhoto src={photos[photoIndex].url} />
        <UilAngleRight onClick={photoInc}size='65'/>
      </MainDisplay>

    </PhotosDIV>
  )
}

export default Photos;