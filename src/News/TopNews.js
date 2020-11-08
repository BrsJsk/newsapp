import React from 'react';
import { NewsCard } from '../shared';
import { connect } from 'react-redux';
import { getTopNews, getTopNewsLoadingStatus } from '../redux/selectors';
import { LoadingStatus } from '../constants';
import { AddTopNews, SetSelectedArticleDetails, SetTopNewsStatus } from '../redux/actions';
import { Code } from 'react-content-loader';
import { MainHeading } from '../shared/Text';
import { Wrapper } from '../shared/Wrapper';
import NoData from '../shared/NoData';
import { getFakeData } from '../Categories/fakedata';
import { TopNewsList } from '../shared/NewsList';

// TODO: Use real data.
class TopNews extends React.Component {
  getData = () => {
    // return fetch(
    // 		`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`,
    // ).then((res) => res.json())

    return new Promise((resolve) => {
      resolve(getFakeData());
    });
  };

  componentDidMount() {
    if (!this.props.news.length && this.props.status !== LoadingStatus.LOADING) {
      const { SetTopNewsStatus, AddTopNews } = this.props;
      SetTopNewsStatus(LoadingStatus.LOADING);

      this.getData()
        .then((data) => {
          AddTopNews(data && data.articles.length ? data.articles : []);
          SetTopNewsStatus(LoadingStatus.SUCCESS);
        })
        .catch((err) => {
          console.error(err);
          SetTopNewsStatus(LoadingStatus.ERROR);
        });
    }
  }

  render() {
    const setArticleDetails = (article) => {
      this.props.SetSelectedArticleDetails(article);
    };

    if (this.props.status === LoadingStatus.LOADING) {
      return (
        <Wrapper>
          <Code />
        </Wrapper>
      );
    }

    if (this.props.status === LoadingStatus.ERROR) {
      return <NoData />;
    }

    return (
      <Wrapper>
        <MainHeading>Top news from Great Britain:</MainHeading>
        <TopNewsList>
          {this.props.news.map((news, index) => (
            <NewsCard news={news} key={index} setArticleDetails={setArticleDetails} />
          ))}
        </TopNewsList>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const news = getTopNews(state);
  const status = getTopNewsLoadingStatus(state);
  return { news, status };
};

export default connect(mapStateToProps, {
  AddTopNews,
  SetTopNewsStatus,
  SetSelectedArticleDetails,
})(TopNews);
