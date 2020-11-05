import { ADD_TOP_NEWS, SET_SELECTED_ARTICLE_DETAILS, SET_TOP_NEWS_STATUS } from '../actionTypes';

const initialState = {
  topNews: [],
  status: null,
  selectedArticleDetails: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TOP_NEWS: {
      const { data } = action.payload;

      return {
        ...state,
        topNews: data,
      };
    }
    case SET_TOP_NEWS_STATUS: {
      const { status } = action.payload;
      return {
        ...state,
        status,
      };
    }
    case SET_SELECTED_ARTICLE_DETAILS: {
      const { article } = action.payload;
      return {
        ...state,
        selectedArticleDetails: article,
      };
    }
    default:
      return state;
  }
}
