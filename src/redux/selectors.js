export const getTopNewsState = store => store.topNews;

export const getTopNews = store =>
	getTopNewsState(store) ? getTopNewsState(store).topNews : [];

export const getTopNewsLoadingStatus = store => getTopNewsState(store).status

export const getSelectedArticleDetails = store => getTopNewsState(store).selectedArticleDetails
