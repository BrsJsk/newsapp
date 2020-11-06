import React, { useEffect, useState } from 'react';
import { UnderlinedHeading } from '../shared/Text';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import CategoryNewsSlider from './CategoryNewsSlider';
import { getFakeData } from './fakedata';

function CategoryList(props) {
  const [isAccordionOn, toggleAccordion] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const { category } = props;

  const handleAccordionToggle = () => {
    toggleAccordion(!isAccordionOn);
  };

  useEffect(() => {
    if (articles && !articles.length && !isLoading) {
      setIsLoading(true);

      new Promise((resolve) => {
        setTimeout(() => {
          resolve(getFakeData());
        }, 1000);
      })
        .then((data) => {
          console.log(data);
          setIsLoading(false);
          setArticles(data.articles);
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
      // fetch(
      //   `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`,
      // )
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setIsLoading(false);
      //     setArticles(data.articles);
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     setIsLoading(false);
      //     console.error(err);
      //   });
    }
  }, [articles, isLoading]);

  return (
    <div>
      <UnderlinedHeading>
        {category}

        {isAccordionOn ? (
          <FaArrowDown onClick={handleAccordionToggle} style={{ marginLeft: '20px' }} />
        ) : (
          <FaArrowUp onClick={handleAccordionToggle} style={{ marginLeft: '20px' }} />
        )}
      </UnderlinedHeading>
      {isAccordionOn ? <CategoryNewsSlider loading={isLoading} articles={articles} /> : null}
    </div>
  );
}

export default CategoryList;
