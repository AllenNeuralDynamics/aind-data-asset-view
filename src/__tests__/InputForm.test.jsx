import React from 'react';
// import selectEvent from 'react-select-event';
import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import InputForm from '../components/InputForm';


const setup = () => {
  const { getByTestId, getByText, getByLabelText } = render(<InputForm />);
  
  const buttonElement = getByTestId('submit-btn');
  const typeSelect = getByTestId('select-type');
  const orderSelect = getByTestId('select-sort-order');
  const sortFieldSelect = getByTestId('select-sort-field');
  
  return {buttonElement, typeSelect, orderSelect, sortFieldSelect, getByText, getByLabelText} 
};



describe('test input form', () => {

  test('Render input fields correctly', () => {
    const { buttonElement, typeSelect, orderSelect, sortFieldSelect } = setup();

    expect(buttonElement).toBeInTheDocument();
    expect(typeSelect).toBeInTheDocument();
    expect(orderSelect).toBeInTheDocument();
    expect(sortFieldSelect).toBeInTheDocument();
  });

  
  test('Should display correct number of data asset type options', () => {
    const { typeSelect } = setup();
    expect(typeSelect.length).toBe(1);
  });

  test('Should display correct number of sort field options', () => {
    const { sortFieldSelect } = setup();
    expect(sortFieldSelect.length).toBe(4);
  });

  test('Show selected sort field option on click', async () => {
    const { getByText } = setup();
    const selectedItem = getByText('Size');
    await act(async () => userEvent.click(selectedItem));
    expect(getByText('Size')).toBeInTheDocument();
  });
  
  test('Displays correct number of sort order options', () => {
    const { orderSelect } = setup();
    expect(orderSelect.length).toBe(2);
  })

  test('Show selected sort order on click', async () => {
    const { getByText } = setup();
    const selectedOrder = getByText('Descending');
    await act(async () => userEvent.click(selectedOrder));
    expect(getByText('Descending')).toBeInTheDocument();
  })

  // test submit button when clicked --> expect the response?
  // test start
  // test limit
});
