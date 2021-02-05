import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NewsCardInformations } from './NewsCard';

const newsData = {
  title: 'News title',
  urlToImage: 'www.google.com/image/myImage',
  description: 'Description of this news',
};

test('displays correct heading', () => {
  render(
    <NewsCardInformations
      title={newsData.title}
      thumbnail={newsData.urlToImage}
      title1={newsData.description}
    />,
  );
  expect(screen.getByRole('heading')).toHaveTextContent(newsData.title);
});

test('displays correct description', () => {
  render(
    <NewsCardInformations
      title={newsData.title}
      thumbnail={newsData.urlToImage}
      title1={newsData.description}
    />,
  );
  expect(screen.getByRole('main')).toHaveTextContent(newsData.description);
});
