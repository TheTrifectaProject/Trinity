
//HOUSE ALL THE FETCH FUNCTIONS: 
import {useState, useEffect} from 'react'
import axios from 'axios';

const token = `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`


export const fetchMeta = (product_id) => {
    const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'; // Replace with your API base URL
    const endpoint = `/reviews/meta?product_id=${product_id}`;
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

export const fetchReviews = (page, count, sort, product_id) => {
  const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp'; // Replace with your API base URL
  const endpoint = '/reviews/';
  const url = `${baseURL}${endpoint}?page=${page}&count=${count}&sort=${sort}&product_id=${product_id}`;
  const headers = {
    Authorization: token,
  };

  return axios.get(url, { headers })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error.response.data);
      throw error;
    });
}