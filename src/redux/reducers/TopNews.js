import { ADD_TOP_NEWS, SET_TOP_NEWS_STATUS } from "../actionTypes";

const initialState = {
	topNews: [],
	status: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_TOP_NEWS: {
			const { data } = action.payload;

			return {
				...state,
				topNews: data
			};
		}
		case SET_TOP_NEWS_STATUS: {
			const {status} = action.payload
			return {
				...state,
				status
			};
		}
		default:
			return state;
	}
}
