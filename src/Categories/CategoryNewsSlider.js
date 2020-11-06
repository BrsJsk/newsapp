import React from 'react';
import styled from 'styled-components';
import { Code } from 'react-content-loader';
import NoData from '../shared/NoData';
import { NewsCard } from '../shared';
import { connect } from 'react-redux';
import { SetSelectedArticleDetails } from '../redux/actions';

function CategoryNewsSlider(props) {
  const { loading, articles, SetSelectedArticleDetails } = props;

  const setArticleDetails = (article) => {
    SetSelectedArticleDetails(article);
  };

  if (loading) {
    return <Code />;
  }

  if (!articles?.length && !loading) {
    return <Wrapper>{loading ? <NoData /> : null}</Wrapper>;
  }

  return (
    <Wrapper>
      {articles.map((article) => (
        <NewsCard news={article} setArticleDetails={setArticleDetails} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
`;

export default connect(null, {
  SetSelectedArticleDetails,
})(CategoryNewsSlider);
