import React from 'react';
import styled from 'styled-components';
import {NewsCard} from "../shared";

export function TopNews() {
	return (
		<Wrapper>
			<MainHeading>Top news from Great Britain:</MainHeading>
			<TopNewsList>
				<NewsCard/>
				<NewsCard/>
				<NewsCard/>
				<NewsCard/>
				<NewsCard/>
				<NewsCard/>
			</TopNewsList>
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

