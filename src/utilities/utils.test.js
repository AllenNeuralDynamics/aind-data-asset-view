import urlBuilder from './utils';

test('Checks url is built correctly', () => {
  const actualURL = urlBuilder('http://localhost:8080/data_assets', {
    type: 'dataset',
  });
  const expected = 'http://localhost:8080/data_assets?type=dataset';
  expect(actualURL).toBe(expected);
});
