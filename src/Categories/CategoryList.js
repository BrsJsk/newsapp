import React, { useEffect, useState } from 'react';
import { UnderlinedHeading } from '../shared/Text';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import CategoryNewsSlider from './CategoryNewsSlider';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loadTop5NewsForCategory } from '../services/data-service';

function CategoryList({ category, country }) {
  const [isAccordionOn, toggleAccordion] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleAccordionToggle = () => {
    toggleAccordion(!isAccordionOn);
  };

  useEffect(() => {
    setIsLoading(true);

    loadTop5NewsForCategory(category, country)
      .then((data) => {
        setIsLoading(false);
        setArticles(data.articles);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  }, [country]);

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
