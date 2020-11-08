import React, { useEffect, useState } from 'react';
import { Subject } from 'rxjs';
import { MainHeading } from '../shared/Text';
import { Wrapper } from '../shared/Wrapper';
import styled from 'styled-components';
import { debounceTime } from 'rxjs/operators';
import { Code } from 'react-content-loader';
import NoData from '../shared/NoData';
import { NewsCard, SelectedCountryName } from '../shared';
import { connect } from 'react-redux';
import { SetSelectedArticleDetails } from '../redux/actions';
import { TopNewsList } from '../shared/NewsList';
import { getSelectedCountry } from '../redux/selectors';
import { searchTopNews } from '../services/data-service';

function Search(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const { country, SetSelectedArticleDetails } = props;

  const searchBarValue$ = new Subject();

  const setArticleDetails = (article) => {
    SetSelectedArticleDetails(article);
  };

  const searchBar = searchBarValue$.pipe(debounceTime(1000)).subscribe((value) => {
    setSearchValue(value);
    loadData(value);
  });

  const loadData = (value = searchValue) => {
    setIsLoading(true);
    searchTopNews(value, country)
      .then((data) => {
        setIsLoading(false);
        setArticles(data.articles);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  useEffect(() => {
    loadData();

    return () => {
      searchBar.unsubscribe();
    };
  }, [country]);

  return (
    <Wrapper>
      <MainHeading>
        Search top news from <SelectedCountryName country={country} />:
      </MainHeading>

      <SearchBarWrapper>
        <SearchBar
          type="text"
          placeholder="Search"
          onChange={(event) => searchBarValue$.next(event.target.value)}
        />
      </SearchBarWrapper>

      {isLoading ? <Code /> : null}

      {!isLoading && !articles.length ? <NoData /> : null}

      {!isLoading && articles.length ? (
        <TopNewsList>
          {articles.map((news, index) => (
            <NewsCard news={news} key={index} setArticleDetails={setArticleDetails} />
          ))}
        </TopNewsList>
      ) : null}
    </Wrapper>
  );
}

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled.input`
  width: 300px;
  height: 100%;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 30px;
  transition: all 0.2s linear;
  border: 1px solid #ded5d5;
  padding-left: 15px;
  outline: none;
  &:focus {
    box-shadow: 0 11px 29px 0 rgba(0, 0, 0, 0.23);
  }
`;

const mapStateToProps = (state) => {
  const country = getSelectedCountry(state);
  return { country };
};

export default connect(mapStateToProps, {
  SetSelectedArticleDetails,
})(Search);
