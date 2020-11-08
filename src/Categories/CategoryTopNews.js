import React, { useEffect, useState } from 'react';
import { Wrapper } from '../shared/Wrapper';
import { MainHeading } from '../shared/Text';
import { useParams } from 'react-router-dom';
import { getFakeData } from './fakedata';
import { NewsCard, SelectedCountryName } from '../shared';
import { TopNewsList } from '../shared/NewsList';
import { getSelectedCountry } from '../redux/selectors';
import { connect } from 'react-redux';
import { SetSelectedArticleDetails } from '../redux/actions';
import { Code } from 'react-content-loader';

// TODO: Add state. Use real data. A lot of can be shared with TopNews.js
function CategoryTopNews(props) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const { country, SetSelectedArticleDetails } = props;

  useEffect(() => {
    setIsLoading(true);

    getData()
      .then((data) => {
        setIsLoading(false);
        setArticles(data.articles);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  }, [country]);

  const getData = () => {
    return new Promise((resolve) => {
      resolve(getFakeData());
    });
  };

  const setArticleDetails = (article) => {
    SetSelectedArticleDetails(article);
  };

  if (isLoading) {
    return (
      <Wrapper>
        <Code />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <MainHeading>
        Top {id} news from <SelectedCountryName country={country} />:
      </MainHeading>

      <TopNewsList>
        {articles.map((news, index) => (
          <NewsCard news={news} key={index} setArticleDetails={setArticleDetails} />
        ))}
      </TopNewsList>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  const country = getSelectedCountry(state);
  return { country };
};

export default connect(mapStateToProps, {
  SetSelectedArticleDetails,
})(CategoryTopNews);
