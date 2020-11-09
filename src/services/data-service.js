import { Countries } from '../constants';
import { getFakeData } from '../Categories/fakedata';

const isUsingFakeData = () => {
  const { REACT_APP_FAKE_DATA } = process.env;

  return REACT_APP_FAKE_DATA === 'true';
};

const fetchFakeData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getFakeData());
    }, 2000);
  });
};

export const loadTopNews = (country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

  if (isUsingFakeData()) {
    return fetchFakeData();
  }

  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};

export const loadTopNewsForCategory = (category, country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

  if (isUsingFakeData()) {
    return fetchFakeData();
  }

  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&category=${category}&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};

export const loadTop5NewsForCategory = (category, country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

  if (isUsingFakeData()) {
    return fetchFakeData();
  }

  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&category=${category}&pageSize=5&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};

export const searchTopNews = (searchValue, country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

  if (isUsingFakeData()) {
    return fetchFakeData();
  }

  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&q=${searchValue}&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};
