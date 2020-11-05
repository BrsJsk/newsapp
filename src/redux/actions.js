import { ADD_TOP_NEWS, SET_TOP_NEWS_STATUS } from "./actionTypes";


export const AddTopNews = data => ({
	type: ADD_TOP_NEWS,
	payload: {
		data
	}
});

export const SetTopNewsStatus = status => ({
	type: SET_TOP_NEWS_STATUS,
	payload: { status }
});

