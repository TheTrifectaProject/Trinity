import axios from 'axios';

const token = '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';

const fetchQuestions = (productId, page = 1, count = 5) => {
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

