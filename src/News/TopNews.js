import React, {useEffect} from 'react';
import styled from 'styled-components';
import {NewsCard} from "../shared";
import {connect} from "react-redux";
import {getTopNews, getTopNewsLoadingStatus} from "../redux/selectors";
import {LoadingStatus} from "../constants";
import {AddTopNews, SetTopNewsStatus} from "../redux/actions";
import {Code} from 'react-content-loader'

function TopNews(props) {
	useEffect(() => {
		if (!props.news.length && props.status !== LoadingStatus.LOADING) {
			const {SetTopNewsStatus, AddTopNews} = props;
			SetTopNewsStatus(LoadingStatus.LOADING)

			fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then(data => {
				AddTopNews(data && data.articles.length ? data.articles : []);
				SetTopNewsStatus(LoadingStatus.SUCCESS)
			}).catch(err => {
				console.error(err)
				SetTopNewsStatus(LoadingStatus.ERROR)
			})
		}
	})

	return (
		<Wrapper>
			<MainHeading>Top news from Great Britain:</MainHeading>
			{props.status === LoadingStatus.LOADING ? (
				<Code/>
			) : null}

			{props.status === LoadingStatus.SUCCESS && props.news.length ? (
				<TopNewsList>
					{props.news.map((news, index) => (
						<NewsCard news={news} key={index}/>
					))}
				</TopNewsList>
			) : null}

		</Wrapper>
	);
}

const MainHeading = styled.h1`
	font-size: 24px;
    color: #3f3e3e;
`

const Wrapper = styled.div`
	padding: 14px;
`

const TopNewsList = styled.div`
	padding: 14px;
	display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const mapStateToProps = state => {
	const news = getTopNews(state);
	const status = getTopNewsLoadingStatus(state)
	return {news, status};
};

export default connect(mapStateToProps, {AddTopNews, SetTopNewsStatus})(TopNews);

