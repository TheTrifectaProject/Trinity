import react from 'react'
import {useState, useEffect} from 'react'
import styled from "styled-components"
import { UisStar } from '@iconscout/react-unicons-solid'
import { UisStarHalfAlt } from '@iconscout/react-unicons-solid'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilParkingSquare } from '@iconscout/react-unicons'

const StarDIV = styled.div`
`
const TopDIV = styled.div`
display:flex;
justify-content: space-between;
`

const SocialDIV = styled.div`
display:flex;
justify-content: space-between;
width:20%;
`

const Stars = ({ratingsData}) => {

  const [avgRating, setavgRating] = useState('')
  const [fullStars, setfullStars] =useState('')
  const [halfStars, sethalfStars] =useState('')

  const AverageRating = (data) => {
    console.log('STARSS',data);
    const allRatings = data.map((result) => {
      return result.rating;
    })
    const sum = allRatings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / allRatings.length;
    setavgRating((average).toFixed(1));

}

const nums = () => {
  console.log(avgRating)
  let decimalIndex = avgRating.toString().indexOf(".");
  let decimalValue = Number(avgRating.toString().substring(decimalIndex + 1))
  let fullNum = Math.trunc(avgRating);

  if (decimalValue > 5) {
    fullNum += 1;
    let arr = new Array(fullNum).fill('hello')
    setfullStars(arr)
    sethalfStars([]);
  } else if (decimalValue < 2.5) {
    let arr = new Array(fullNum).fill('hello')
    setfullStars(arr)
    sethalfStars([]);
  } else {
    let arr = new Array(fullNum).fill('hello')
    setfullStars(arr)
    sethalfStars([1]);
  }
}

useEffect (() => {
  // if (ratingsData) {}
    AverageRating(ratingsData);


     nums();


}, [avgRating])

const facebook = () => {
  const url = 'https://www.facebook.com/';
  window.open(url, '_blank');
}

const twitter = () => {
  const url = 'https://twitter.com/i/flow/login';
  window.open(url, '_blank');
}

const pinterest = () => {
  const url = 'https://www.pinterest.com/';
  window.open(url, '_blank');
}
if (!fullStars) {
  return null
}
  return (
    <TopDIV>
      <StarDIV>
       {fullStars.map((el) => {
        return <UisStar onClick={() => {console.log(avgRating)}}color="#ffe600" size="38"/>
      })}
      {halfStars.map((el) => {
        return <UisStarHalfAlt color="#ffe600" size="38" />
      })}
    </StarDIV>
    <SocialDIV>
      <UilFacebook onClick={facebook} color="#002aff"  size="28"/>
      <UilTwitter onClick={twitter} color="#00aaff" size="28"/>
      <UilParkingSquare onClick={pinterest} color="#ff0000" size="28"/>
    </SocialDIV>
    </TopDIV>

  )
}

export default Stars;

