import react from 'react'
import {useState, useEffect} from 'react'
import Nav from './components/Nav/Nav.jsx'
import Overview from './components/Overview/Overview.jsx'
import RelatedItems from './components/RelatedItems/RelatedItems.jsx'
import Questions from './components/Q&A/Questions.jsx'
import Reviews from './components/Reviews/Reviews.jsx'
import axios from 'axios';

const token = `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`

const App = () => {
  const [results, setResults] = useState([])
  
  // const params = {'params' : {'data': 'product'}};
    const fetchAnswers = () => {
      const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'; // Replace with your API base URL
      const endpoint = `/reviews/meta?product_id=40344`;
      const url = baseURL + endpoint;
      const headers = {
        Authorization: token,
      };
    
      return axios.get(url, { headers })
        .then((response) => response.data)
        .catch((error) => {
          console.error(error.response.data);
          throw error;
        });
    }; 

    
    
    useEffect(() => {
      // Example usage of fetchAnswers function
     // Replace with the actual question ID
      fetchAnswers()
        .then((reviews) => {
          // Handle the answers data
          console.log(reviews);
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    }, []);
  

  // useEffect(() => {
  //   // Create an instance of Axios with default configuration
  //   const instance = axios.create({
  //     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
  //     headers: {
  //       Authorization: token,
  //     },
  //   });

  //   // Make a GET request using the Axios instance
  //   instance.get('/qa/questions')
  //     .then((response) => {
  //       // Handle the response
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className = "App" >
      <Nav />
      <Overview />
      <RelatedItems />
      <Questions />
      <Reviews />
    </div>
  )
}

export default App;