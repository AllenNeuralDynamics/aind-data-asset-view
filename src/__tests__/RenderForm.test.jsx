import { render } from '@testing-library/react';
import RenderForm from '../components/RenderForm';

describe('Render form component', () => {
  test('Correctly renders renderform component', () => {
    render(<RenderForm />);
  });
});

// const mockUserInput = {

// }

// const fetchMock = jest
//   .spyOn(global, 'fetch')
//   .mockImplementation(() => Promise.resolve({json: () => Promise.resolve([]) }));

// Mock fetch request to test
// describe('Mock fetch request to api', () => {
//   test('Should return 10 data assets', async () => {
//     const json = await fetchMock();
//     expect(fetchMock).toHaveBeenCalledWith('http://localhost:8080/data_assets');
//     expect(json.length).toEqual(10);
//   })

// });
