import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Button from "./Button";

export function NewsCard(props) {
	return (
		<CardWrapper>
			<CardHeading>{props.news.title}</CardHeading>

			<CardThumbnail
				thumbnail={props.news.urlToImage}/>
			<CardDescription title={props.news.description}>{props.news.description}</CardDescription>
			<Link to="/details" onClick={() => props.setArticleDetails(props.news)}>
				<Button placeholder="More" />
			</Link>
		</CardWrapper>
	);
}

const CardWrapper = styled.div`
	max-width: 350px;
	padding: 20px;
	background: #fff;
	box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
	border-radius: 5px;
	margin-bottom: 30px;
	transition: all 0.2s linear;
	&:hover {
	position: relative;
		top: -1px;
		box-shadow: 0 11px 29px 0 rgba(0,0,0,0.23);
	}
`
const CardThumbnail = styled.div`
	width: 100%;
	height: 200px;
	background-size: 100%;
    background-repeat: no-repeat;
	background-image: ${props => props.thumbnail ? `url(${props.thumbnail})` : `url(${noImageFoundURL})`};
`

const CardHeading = styled.h2`
  font-size: 17px;
`

const CardDescription = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const noImageFoundURL = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.warwicklodgedental.co.uk%2Fwp-content%2Fthemes%2Fwlodge%2Fimages%2Fno-image-found-360x250.png&f=1&nofb=1'
