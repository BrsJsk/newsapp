import React from 'react';
import styled from 'styled-components';
import { Code } from 'react-content-loader';
import NoData from '../shared/NoData';
import { NewsCard } from '../shared';

function CategoryNewsSlider(props) {
  const { loading, articles } = props;

  if (loading) {
    return <Code />;
  }

  if (!articles?.length && !loading) {
    return <Wrapper>{loading ? <NoData /> : null}</Wrapper>;
  }

  return (
    <Wrapper>
      {articles.map((article) => (
        <NewsCard news={article} />
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
export default CategoryNewsSlider;
