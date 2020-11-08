import {
  ADD_TOP_NEWS,
  SET_COUNTRY,
  SET_IS_DISABLED_COUNTRY,
  SET_SELECTED_ARTICLE_DETAILS,
  SET_TOP_NEWS_STATUS,
} from './actionTypes';

export const AddTopNews = (data) => ({
  type: ADD_TOP_NEWS,
  payload: {
    data,
  },
});

export const SetTopNewsStatus = (status) => ({
  type: SET_TOP_NEWS_STATUS,
  payload: { status },
});

export const SetSelectedArticleDetails = (article) => ({
  type: SET_SELECTED_ARTICLE_DETAILS,
  payload: { article },
});

export const SetCountry = (country) => ({
  type: SET_COUNTRY,
  payload: { country },
});

export const SetIsDisabledCountry = (isDisabled) => ({
  type: SET_IS_DISABLED_COUNTRY,
  payload: { isDisabled },
});
