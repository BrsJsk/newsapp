import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/breakpoints';
import {useSpring, animated} from 'react-spring'

function Button({ placeholder, handleClick }) {
		const props = useSpring({
				to: {opacity: 1, backgroud: '#f1eded'},
				from: {opacity: 0.6, backgroud: '#fff'}
		})
		return <animated.div style={props}><Wrapper onClick={() => (handleClick ? handleClick() : null)}>{placeholder}</Wrapper></animated.div>;
}

const Wrapper = styled.button`
  border: 1px solid #b7b3b3;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  &:hover {
    box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.23);
  }

  @media ${device.mobileS} {
    width: 100%;
    height: 60px;
  }

  @media ${device.laptop} {
    width: 100px;
    height: 35px;
  }
`;

export default Button;
