import React, { useEffect, useState } from 'react';
import { Wrapper } from '../shared/Wrapper';
import { MainHeading } from '../shared/Text';
import { useParams } from 'react-router-dom';
import { getFakeData } from './fakedata';
import styled from 'styled-components';
import { NewsCard } from '../shared';
import { TopNewsList } from '../shared/NewsList';

// TODO: Add state. Use real data. A lot of can be shared with TopNews.js
function CategoryTopNews() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (articles && !articles.length && !isLoading) {
      setIsLoading(true);

      getData()
        .then((data) => {
          setIsLoading(false);
          setArticles(data.articles);
          console.log(data);
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
    }
  }, [id, articles, isLoading]);

  const getData = () => {
    return new Promise((resolve) => {
      resolve(getFakeData());
    });
  };

  const setArticleDetails = (article) => {
    console.log(article);
  };

  return (
    <Wrapper>
      <MainHeading>Top {id} news from Great Britain:</MainHeading>

      <TopNewsList>
        {articles.map((news, index) => (
          <NewsCard news={news} key={index} setArticleDetails={setArticleDetails} />
        ))}
      </TopNewsList>
    </Wrapper>
  );
}

export default CategoryTopNews;
