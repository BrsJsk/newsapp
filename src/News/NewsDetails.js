import React from 'react';
import styled from 'styled-components';
import { getSelectedArticleDetails } from '../redux/selectors';
import { connect } from 'react-redux';
import NoData from '../shared/NoData';
import Button from '../shared/Button';

function NewsDetails(props) {
  const { article } = props;

  const goBack = () => {
    window.history.back();
  };

  if (!article) {
    return <NoData />;
  }

  if (article) {
    return (
      <Wrapper>
        <h1>{article.title}</h1>

        <Image src={article.urlToImage} />

        <p>{article.content}</p>

        <Button placeholder="Go back" handleClick={goBack} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

const mapStateToProps = (state) => {
  const article = getSelectedArticleDetails(state);
  return { article };
};

export default connect(mapStateToProps)(NewsDetails);
