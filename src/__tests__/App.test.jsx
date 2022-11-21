import { render } from '@testing-library/react';
import App from '../App';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
        name: "test fetch"
    })
  })
);

const responseData = async () => {
    try {const url = `http://localhost:8080/data_assets`;
        const response = await fetch(url) //resolves to undefined
        return await response.json()
    } catch(e) {
        return e;
    }
}

test('get metadata', async () => {
    const metadata = await responseData();
    expect(metadata).toEqual();
})

test('renders App', () => {
  render(<App />);
});
