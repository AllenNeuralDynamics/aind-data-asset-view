import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import InputForm from '../components/InputForm';

const setup = () => {
  const mockSubmit = jest.fn();
  render(
    <InputForm setTypeCallback={mockSubmit} setQueryCallback={mockSubmit} />
  );

  const typeSelect = screen.getByTestId('select-type');
  const querySearch = screen.getByTestId('query-search-bar');

  return {
    typeSelect, querySearch, mockSubmit
  };
};

describe('test input form', () => {
  test('Render input form component correctly', () => {
    const { typeSelect, querySearch } = setup();

    expect(typeSelect).toBeInTheDocument();
    expect(querySearch).toBeInTheDocument();
  });
  
  test('Should display default data asset type option', () => {
    const { typeSelect } = setup();
    expect(typeSelect).toHaveValue('');
  });

  test('InputForm should submit correct output on initial render', () => {
    const { typeSelect, mockSubmit } = setup();

    fireEvent.submit(typeSelect);
    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit.mock.calls).toEqual([
      [
        {
          type: 'both',
        },
      ],
    ]);
  });
});
