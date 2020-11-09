import React from 'react';
import styled from 'styled-components';
import { NoDataText } from './Text';
import Button from './Button';
import { Link } from 'react-router-dom';
import { device } from '../styles/breakpoints';

export function NewsCard(props) {
  const { news } = props;

  if (!news) {
    return <NoDataText>No data</NoDataText>;
  }

  return (
    <CardWrapper>
      <CardHeading>{news.title}</CardHeading>

      <CardThumbnail thumbnail={news.urlToImage} />
      <CardDescription title={news.description}>{news.description}</CardDescription>
      <Link to="/details" onClick={() => props.setArticleDetails(news)}>
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
