import React from 'react';
import styled from "styled-components";

export function NewsCard() {
	return (
		<CardWrapper>
			<CardHeading>Title</CardHeading>

			<CardThumbnail
				thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hF-fQdeI7NAltPBvzistAwHaEN%26pid%3DApi&f=1" />
			<CardDescription>Vel molestiae et tempore aliquid dolorum consectetur aliquid. Voluptas voluptatem et ratione nesciunt
				placeat minus ut. Fugit autem accusamus minus. Nesciunt nemo earum ipsum dolorem iste aut. Commodi
				minima et necessitatibus voluptas cumque debitis.…</CardDescription>
			<button>More</button>
		</CardWrapper>
	);
}

const CardWrapper = styled.div`
	max-width: 350px;
    background: #f6f6f6;
    height: 350px;
    display: block;
    border: 1px solid #d2d0d0;
    border-radius: 4px;
    padding: 4px;
    margin-bottom: 15px;
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
