// Top news
import { Countries } from '../constants';

export const getTopNewsState = (store) => store.topNews;

export const getTopNews = (store) => (getTopNewsState(store) ? getTopNewsState(store).topNews : []);

export const getTopNewsLoadingStatus = (store) => getTopNewsState(store).status;

export const getSelectedArticleDetails = (store) => getTopNewsState(store).selectedArticleDetails;

// Country
export const getCountryState = (store) => store.country;

export const getSelectedCountry = (store) =>
  getCountryState(store) ? getCountryState(store).country : Countries.GREAT_BRITAN;

export const getIsDisabled = (store) =>
  getCountryState(store) ? getCountryState(store).isDisabled : true;
