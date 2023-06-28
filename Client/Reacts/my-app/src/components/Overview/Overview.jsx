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
height:725px;
width: 1220px;
margin-bottom: 40px;
margin-left: 75px;
margin-right: 75px;
box-shadow: 0 20px 10px 10px rgba(0, 0, 0, 0.2);
`
const TopDIV = styled.div`
display:flex;
height:80%;
`

const BottomDIV = styled.div`

display:flex;
flex-direction:column;
justify-content: center;
margin-top:10px;
margin-left: 90px;
margin-right: 90px;
margin-bottom:10px;
height:20%;
`

const Overview = ({currentProductId}) => {

  const [currentProduct, setcurrentProduct] = useState('');
  const [styles, setStyles] = useState('');
  const [currentStyle, setcurrentStyle] = useState('');
  const [photos, setPhotos] = useState('');
  const [mainPhoto, setmainPhoto] = useState('');

  let token = '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';

//40344
    // const fetchProducts = () => {
    //   const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'; // Replace with your API base URL
    //   const endpoint = `/products`;
    //   const url = baseURL + endpoint;
    //   const headers = {
    //     Authorization: token,
    //   };

    //   return axios.get(url, { headers })
    //     .then((response) => console.log('fetchProducts', response.data))
    //     .catch((error) => {
    //       console.error(error.response.data);
    //       throw error;
    //     });
    // };

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
          setmainPhoto(response.data.results[0].photos[0])
        })
        .catch((error) => {
          console.error(error.response);
          throw error;
        });
    };

    const setcStyle = () => {
      setcurrentStyle(styles.filter((style) => {
        return style['default?'] === true;
      }))
    }

  useEffect(() => {

    fetchProduct(currentProductId);
    fetchStyles(currentProductId);

  }, []);

  const updateMainPhoto = (photo) => {
    setmainPhoto(photo);
  }

  return (
    <OverviewDIV>

      <TopDIV>
        <Photos photos={photos} mainPhoto={mainPhoto} updateMainPhoto={updateMainPhoto} />
        <ProductandStyle currentProduct={currentProduct} currentStyle={currentStyle} setcurrentStyle={setcurrentStyle} setPhotos={setPhotos} styles={styles} updateMainPhoto={updateMainPhoto} />
      </TopDIV>

      <BottomDIV>
        <h2>{currentProduct.slogan}</h2>
        <p>{currentProduct.description}</p>
      </BottomDIV>

    </OverviewDIV>
  )
}

export default Overview;