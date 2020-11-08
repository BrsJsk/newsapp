import { Countries } from '../constants';

export const loadTopNews = (country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};

export const loadTopNewsForCategory = (category, country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&category=${category}&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};

export const loadTop5NewsForCategory = (category, country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&category=${category}&pageSize=5&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};
