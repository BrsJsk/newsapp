import React from 'react';
import styled from 'styled-components';
import { NoDataText } from './Text';
import Button from './Button';
import { Link } from 'react-router-dom';
import { device } from '../styles/breakpoints';
import { NewsCardInformations } from '../News';

export function NewsCard({ news, setArticleDetails }) {

		if (!news) {
				return <NoDataText>No data</NoDataText>;
		}

		return (
				<CardWrapper>
						<NewsCardInformations
								title={news.title}
								thumbnail={news.urlToImage}
								title1={news.description}
						/>
						<Link to="/details" onClick={() => setArticleDetails(news)}>
								<Button placeholder="More" />
						</Link>
				</CardWrapper>
		);
}

const CardWrapper = styled.div`
		margin: 5px;
		width: 100%;
		padding: 20px;
		background: #fff;
		box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		transition: all 0.2s linear;

		&:hover {
				position: relative;
				top: -1px;
				box-shadow: 0 11px 29px 0 rgba(0, 0, 0, 0.23);
		}

		@media ${device.mobileS} {
				max-width: 100%;
		}
		@media ${device.tablet} {
				max-width: 40%;
		}
		@media ${device.laptop} {
				max-width: 20%;
		}
`;
