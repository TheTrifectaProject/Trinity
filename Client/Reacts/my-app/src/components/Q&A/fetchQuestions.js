import axios from 'axios';

const token = process.env.REACT_APP_GITHUB_TOKEN;

const fetchQuestions = (productId, page = 1, count = 100) => {
  const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
  const endpoint = '/qa/questions';
  const url = `${baseURL}${endpoint}`;
  const headers = {
    Authorization: token,
  };
  const params = {
    product_id: productId,
    page,
    count,
  };

  return axios
    .get(url, { headers, params })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default fetchQuestions;

