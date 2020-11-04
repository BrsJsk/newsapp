import React from "react";
import styled from 'styled-components';

export function Header() {
	return (
		<HeaderWrapper>
			<div>
				<HeaderButton>Top News</HeaderButton>
				<HeaderButton>Categories</HeaderButton>
				<HeaderButton>Search</HeaderButton>
			</div>

			<div>
				<HeaderButton>GB</HeaderButton>
				<HeaderButton>US</HeaderButton>
			</div>
		</HeaderWrapper>
	)
}


const HeaderWrapper = styled.div`
	display: flex;
	height: 60px;
	width: 100vw;
	background: #fbf6f6;
	justify-content: space-between;
`

const HeaderButton = styled.button`
	height: 60px;
    min-width: 120px;
    background: #cbcbcd;
    border: 1px solid #a4a4a9;
    margin-right: 5px;
`
