import React, { useEffect } from 'react';
import { NewsCard, SelectedCountryName } from '../shared';
import { connect } from 'react-redux';
import { getSelectedCountry, getTopNews, getTopNewsLoadingStatus } from '../redux/selectors';
import { LoadingStatus } from '../constants';
import { AddTopNews, SetSelectedArticleDetails, SetTopNewsStatus } from '../redux/actions';
import { Code } from 'react-content-loader';
import { MainHeading } from '../shared/Text';
import { Wrapper } from '../shared/Wrapper';
import NoData from '../shared/NoData';
import { getFakeData } from '../Categories/fakedata';
import { TopNewsList } from '../shared/NewsList';

// TODO: Use real data.
function TopNews(props) {
  const { news, status, country, SetTopNewsStatus, AddTopNews } = props;
  const getData = () => {
    // return fetch(
    // 		`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`,
    // ).then((res) => res.json())

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getFakeData());
      }, 3000);
    });
  };

  useEffect(() => {
    SetTopNewsStatus(LoadingStatus.LOADING);

    getData()
      .then((data) => {
        AddTopNews(data && data.articles.length ? data.articles : []);
        SetTopNewsStatus(LoadingStatus.SUCCESS);
      })
      .catch((err) => {
        console.error(err);
        SetTopNewsStatus(LoadingStatus.ERROR);
      });
  }, [country]);

  const setArticleDetails = (article) => {
    SetSelectedArticleDetails(article);
  };

  if (status === LoadingStatus.LOADING) {
    return (
      <Wrapper>
        <Code />
      </Wrapper>
    );
  }

  if (status === LoadingStatus.ERROR) {
    return <NoData />;
  }

  return (
    <Wrapper>
      <MainHeading>
        Top news from <SelectedCountryName country={country} />:
      </MainHeading>
      <TopNewsList>
        {news.map((news, index) => (
          <NewsCard news={news} key={index} setArticleDetails={setArticleDetails} />
        ))}
      </TopNewsList>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  const news = getTopNews(state);
  const status = getTopNewsLoadingStatus(state);
  const country = getSelectedCountry(state);
  return { news, status, country };
};

export default connect(mapStateToProps, {
  AddTopNews,
  SetTopNewsStatus,
  SetSelectedArticleDetails,
})(TopNews);
