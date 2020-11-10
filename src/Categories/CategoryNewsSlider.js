import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Code } from 'react-content-loader';
import NoData from '../shared/NoData';
import { connect } from 'react-redux';
import { SetSelectedArticleDetails } from '../redux/actions';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';

const duration = 150;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0.3 },
  entered: { opacity: 1 },
  exiting: { opacity: 0.3 },
  exited: { opacity: 1 },
};

function CategoryNewsSlider({ loading, articles, SetSelectedArticleDetails }) {
  const [articleInSlider, setArticleInSlider] = useState();
  const [animate, setAnimate] = useState(false);

  const [articleIndex, setArticleIndex] = useState(0);

  useEffect(() => {
    if (articles && articles.length && !articleInSlider) {
      const [first] = articles;
      setArticleInSlider(first);
      setArticleIndex(0);
    }
  }, [loading, articles]);

  const setArticleDetails = (article) => {
    SetSelectedArticleDetails(article);
  };

  const nextArticle = (action) => {
    setAnimate(true);
    const nextIndex = action === '+' ? articleIndex + 1 : articleIndex - 1;
    setArticleIndex(nextIndex);
    const nextArticle = articles.find((_, index) => index === nextIndex);
    setArticleInSlider(nextArticle);

    setTimeout(() => {
      setAnimate(false);
    }, duration);
  };

  const isPreviousArrowEnabled = () => {
    return articleIndex > 0;
  };

  const isNextArrowEnabled = () => {
    return articleIndex < articles.length - 1;
  };

  if (loading) {
    return <Code />;
  }

  if (!articles?.length && !loading) {
    return <Wrapper>{loading && <NoData />}</Wrapper>;
  }

  return (
    <Wrapper>
      {!!articleInSlider ? (
        <Transition in={animate} timeout={duration}>
          {(state) => (
            <SliderWrapper
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              background={articleInSlider.urlToImage}
            >
              <Link onClick={() => setArticleDetails(articleInSlider)} to="/details">
                <SliderHeading>{articleInSlider.title}</SliderHeading>
              </Link>

              <SliderArrowsWrapper>
                <SliderIcon
                  onClick={() => (isPreviousArrowEnabled() ? nextArticle('-') : null)}
                  disabled={!isPreviousArrowEnabled()}
                >
                  <FaAngleLeft />
                </SliderIcon>

                <SliderIcon
                  onClick={() => (isNextArrowEnabled() ? nextArticle('+') : null)}
                  disabled={!isNextArrowEnabled()}
                >
                  <FaAngleRight />
                </SliderIcon>
              </SliderArrowsWrapper>
            </SliderWrapper>
          )}
        </Transition>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background-image: ${(props) =>
    props.background ? `url(${props.background})` : `url(${noImageFoundURL})`};
  background-color: #dedada;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const SliderIcon = styled.div`
  font-size: 40px;
  color: #fff;

  ${(props) =>
    props.disabled &&
    `
      opacity: 0.2;
      cursor: not-allowed;
    `};
`;

const SliderHeading = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  align-items: center;
  background-color: #4c4a4a7a;
  color: white;
  font-weight: 500;
`;

const SliderArrowsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const noImageFoundURL =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.warwicklodgedental.co.uk%2Fwp-content%2Fthemes%2Fwlodge%2Fimages%2Fno-image-found-360x250.png&f=1&nofb=1';

export default connect(null, {
  SetSelectedArticleDetails,
})(CategoryNewsSlider);
