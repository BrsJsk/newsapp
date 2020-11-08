import { Countries } from '../constants';

export const loadTopNews = (country = Countries.GREAT_BRITAIN) => {
  const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
  console.log(process.env);
  return fetch(
    `${REACT_APP_API_URL}top-headlines?country=${country}&apiKey=${REACT_APP_API_KEY}`,
  ).then((res) => res.json());
};
