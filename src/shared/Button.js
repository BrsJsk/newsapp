import React from 'react';
import styled from 'styled-components';

function Button(props) {
	const {placeholder, handleClick} = props;
	return (
		<Wrapper onClick={() => handleClick ? handleClick() : null}>{placeholder}</Wrapper>
	);
}

const Wrapper = styled.button`
    width: 100px;
    height: 35px;
    background: #f1eded;
    border: 1px solid #b7b3b3;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    &:hover {
		box-shadow: 0 1px 15px 0 rgba(0,0,0,0.23);
	}
`

export default Button;
