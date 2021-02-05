import React from 'react';
import styled from 'styled-components';
import { NoDataText } from './Text';
import Button from './Button';
import { Link } from 'react-router-dom';
import { device } from '../styles/breakpoints';
import * as PropTypes from 'prop-types';

export function NewsCardInformations(props) {
  return (
    <>
      <CardHeading role="heading">{props.title}</CardHeading>

      <CardThumbnail thumbnail={props.thumbnail} />
      <CardDescription role="main" title={props.title1}>
        {props.title1}
      </CardDescription>
    </>
  );
}

NewsCardInformations.propTypes = {
  title: PropTypes.any,
  thumbnail: PropTypes.any,
  title1: PropTypes.any,
};

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
const CardThumbnail = styled.div`
  width: 100%;
  height: 200px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    props.thumbnail ? `url(${props.thumbnail})` : `url(${noImageFoundURL})`};
`;

const CardHeading = styled.h2`
  font-size: 17px;
`;

const CardDescription = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const noImageFoundURL =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.warwicklodgedental.co.uk%2Fwp-content%2Fthemes%2Fwlodge%2Fimages%2Fno-image-found-360x250.png&f=1&nofb=1';
