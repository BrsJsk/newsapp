import React from 'react';
import styled from 'styled-components';

const catimg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fcat-quotes-1543599392.jpg%3Fcrop%3D1.00xw%3A0.757xh%3B0%2C0%26resize%3D1200%3A*&f=1&nofb=1'

function NewsDetails() {
	return (
		<Wrapper>
			<h1>Title</h1>

			<img src={catimg} alt="Image"/>

			<p>Description</p>

			<button>Go back</button>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
    flex-direction: column;
    padding: 15px;
`

export default NewsDetails;
