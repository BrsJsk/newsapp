import { Countries } from '../constants';
import { getFakeData } from '../Categories/fakedata';

const isProd = false;

export const loadTopNews = (country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

  if (!isProd) {
    return Promise.resolve(getFakeData());
  }

  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};

export const loadTopNewsForCategory = (category, country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

  if (!isProd) {
    return Promise.resolve(getFakeData());
  }

  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&category=${category}&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};

export const loadTop5NewsForCategory = (category, country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

  if (!isProd) {
    return Promise.resolve(getFakeData());
  }

  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&category=${category}&pageSize=5&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};

export const searchTopNews = (searchValue, country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

  if (!isProd) {
    return Promise.resolve(getFakeData());
  }

  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&q=${searchValue}&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};
