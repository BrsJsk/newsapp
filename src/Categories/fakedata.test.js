import { getFakeData } from './fakedata';

test('Should return value', () => {
  const data = getFakeData();

  expect(data.articles.length).toBeTruthy();
});
