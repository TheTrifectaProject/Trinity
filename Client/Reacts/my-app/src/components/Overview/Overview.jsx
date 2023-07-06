import react from 'react'
import {useState, useEffect} from 'react'
import styled from "styled-components"
import ProductandStyle from "./ProductandStyle.jsx"
import Photos from "./Photos.jsx"
import axios from 'axios';

const OverviewDIV = styled.div`
display:flex;
flex-direction: column;
margin-top: 45px;
height:750px;
width: 75%;
margin-bottom: 40px;
margin-left: 75px;
margin-right: 75px;
box-shadow: 0 20px 10px 10px rgba(0, 0, 0, 0.2);
background-color: #79797913;
`
const TopDIV = styled.div`
display:flex;
height:93%;
`

const BottomDIV = styled.div`

display:flex;
flex-direction:column;
align-items: center;
margin-top:10px;
margin-left: 10%;

margin-bottom:10px;
height:20%;
width:80%;

border-radius: 300px;
`
const DescriptionDIV = styled.div`
  box-shadow: 0 8px 3px 3px rgba(0, 0, 0, 0.2);
  background-color: #db1b1b39;
  height:75%;
  width: 92%;
  margin-top: 10px;
  border-radius: 25px;
`

const Overview = ({currentProductId}) => {

  const [currentProduct, setcurrentProduct] = useState('');
  const [styles, setStyles] = useState('');
  const [currentStyle, setcurrentStyle] = useState('');
  const [photos, setPhotos] = useState('');
  const [mainPhoto, setmainPhoto] = useState('');
  const [photoIndex, setphotoIndex] = useState(0)
  const [ratingsData, setRatingsData] = useState('')

  let token = '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';

    const fetchProduct = (id) => {
      const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'; // Replace with your API base URL
      const endpoint = `/products/${id}`;
      const url = baseURL + endpoint;
      const headers = {
        Authorization: token,
      };

      return axios.get(url, { headers })
        .then((response) => {
          console.log('fetchProduct', response.data)
          setcurrentProduct(response.data);
        })
        .catch((error) => {
          console.error(error.response.data);
          throw error;
        });
    };

    const fetchStyles = (id) => {
      const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'; // Replace with your API base URL
      const endpoint = `/products/${id}/styles`;
      const url = baseURL + endpoint;
      const headers = {
        Authorization: token,
      };

      return axios.get(url, { headers })
        .then((response) => {
          console.log('fetchStyles', response.data.results)
          setStyles(response.data.results);
          setcurrentStyle(response.data.results[0]);
          setPhotos(response.data.results[0].photos)
          setmainPhoto(response.data.results[0].photos[photoIndex])
        })
        .catch((error) => {
          console.error(error.response);
          throw error;
        });
    };

    const fetchReviews = (page, count, sort, product_id) => {
      const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'; // Replace with your API base URL
      const endpoint = '/reviews/';
      const url = `${baseURL}${endpoint}?page=${page}&count=${count}&sort=${sort}&product_id=${product_id}`;
      const headers = {
        Authorization: token,
      };

      return axios.get(url, { headers })
        .then((response) => {
          console.log('FETCH REVIEWS',response.data.results)
          setRatingsData(response.data.results);
        })
        .catch((error) => {
          console.error(error.response.data);
          throw error;
        });
    }


  useEffect(() => {

    fetchProduct(currentProductId);
    fetchStyles(currentProductId);
    fetchReviews(1, 100, "relevant", currentProductId)
  }, [currentProductId]);

  const updateMainPhoto = (photo, index) => {
    setmainPhoto(photo);
    setphotoIndex(index);

  }

  return (

    <OverviewDIV data-testid='main-Container'>
      <TopDIV>
        <Photos photos={photos} mainPhoto={mainPhoto} updateMainPhoto={updateMainPhoto} setphotoIndex={setphotoIndex} photoIndex={photoIndex} />
        <ProductandStyle currentProduct={currentProduct} currentStyle={currentStyle} setcurrentStyle={setcurrentStyle} setPhotos={setPhotos} styles={styles} updateMainPhoto={updateMainPhoto} setphotoIndex={setphotoIndex} ratingsData ={ratingsData}/>
      </TopDIV>

      {/* <BottomDIV>
        <DescriptionDIV><h2>{currentProduct.slogan}</h2>
        <p> ~ {currentProduct.description} ~ </p></DescriptionDIV>
      </BottomDIV> */}

    </OverviewDIV>
  )
}

export default Overview;