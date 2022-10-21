import React from 'react';
// import selectEvent from 'react-select-event';
import { render, fireEvent } from '@testing-library/react';
import InputForm from '../components/InputForm';

test('input form renders correctly', () => {
  const { getByTestId } = render(<InputForm />);

  const buttonElement = getByTestId('submit-btn');
  const typeSelect = getByTestId('select-type');
  const orderSelect = getByTestId('select-sort-order');
  const sortFieldSelect = getByTestId('select-sort-field');

  expect(buttonElement).toBeInTheDocument();
  expect(typeSelect).toBeInTheDocument();
  expect(orderSelect).toBeInTheDocument();
  expect(sortFieldSelect).toBeInTheDocument();
});

// describe('Select data asset type', () => {

//   const { getByTestId } = render(<InputForm />);

//   const typeSelect = getByTestId('select-type');

//   test('Should display the correct number of options', () => {
//     expect(typeSelect.length).toBe(1);
//   });
// })

//   test('select data asset type', () => {
//     expect(screen.getByText('Dataset')).toBe(true);
//   });
// });

//   // test('Should render button label correctly', () => {
//   //   const buttonElement = screen.getByTestId('submit-btn');
//   //   expect(buttonElement).toBeInTheDocument();
//   //   expect(buttonElement.toHaveTextContent('Submit'));
//   // });

//   // test('Select element for data asset type', () => {
//   //   const selectType = selectEvent.select(getByTestId('select-type'), ['dataset']);
//   //   expect(selectType).toHaveFormValues(['dataset']);
//   // })


// describe('<button />', () => {
//   test('Should render button label correctly', () => {
//     const buttonElement = screen.getByRole('button', {name: /submit/i, hidden: true });
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement.toHaveTextContent('Submit'));
//   });
// });