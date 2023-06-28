import react from 'react'
import {useState, useEffect} from 'react'
import styled from "styled-components"
import Nav from './components/Nav/Nav.jsx'
import Overview from './components/Overview/Overview.jsx'
import RelatedItems from './components/RelatedItems/RelatedItems.jsx'
import Questions from './components/Q&A/Questions.jsx'
import Reviews from './components/Reviews/Reviews.jsx'
import axios from 'axios'

const AppDIV = styled.div`
display:flex;
flex-direction: column;
align-items: center;`

const App = () => {
  let token = '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';

  const [currentProductId, setcurrentProductId] =useState('');

  const fetchProducts = () => {
    const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'; // Replace with your API base URL
    const endpoint = `/products`;
    const url = baseURL + endpoint;
    const headers = {
      Authorization: token,
    };

    return axios.get(url, { headers })
      .then((response) => {
        console.log('fetchProducts', response.data)
        setcurrentProductId(response.data[0].id)
      })
      .catch((error) => {
        console.error(error.response.data);
        throw error;
      });
  };
  useEffect(() => {

    fetchProducts();

  }, []);


  if (!currentProductId) {
    return null;
  }
  return (
    <AppDIV>
      <Nav />
      <Overview currentProductId={currentProductId}/>
      <RelatedItems />
      <Questions currentProductId={currentProductId}/>
      <Reviews currentProductId={currentProductId}/>
    </AppDIV>


  )
}

export default App;