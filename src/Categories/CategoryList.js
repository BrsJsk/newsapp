import React, { useEffect, useState } from 'react';
import { UnderlinedHeading } from '../shared/Text';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import CategoryNewsSlider from './CategoryNewsSlider';
import { Link } from 'react-router-dom';
import { getFakeData } from './fakedata';
import styled from 'styled-components';

// TODO: Add State. Use real data.
function CategoryList(props) {
  const [isAccordionOn, toggleAccordion] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const { category } = props;

  const handleAccordionToggle = () => {
    toggleAccordion(!isAccordionOn);
  };

  const getData = () => {
    // return fetch(
    // 		`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`,
    // ).then((res) => res.json())

    return new Promise((resolve) => {
      resolve(getFakeData());
    });
  };

  useEffect(() => {
    if (articles && !articles.length && !isLoading) {
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
    }
  }, [category, articles, isLoading]);

  return (
    <div>
      <HeadingWrapper>
        <Link to={`/categories/${category}`}>
          <UnderlinedHeading>{category}</UnderlinedHeading>
        </Link>
        {isAccordionOn ? (
          <FaArrowDown onClick={handleAccordionToggle} style={{ marginLeft: '20px' }} />
        ) : (
          <FaArrowUp onClick={handleAccordionToggle} style={{ marginLeft: '20px' }} />
        )}
      </HeadingWrapper>

      {isAccordionOn ? <CategoryNewsSlider loading={isLoading} articles={articles} /> : null}
    </div>
  );
}

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default CategoryList;
