import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputForm from '../components/InputForm';

const setup = () => {
  const mockSubmit = jest.fn();
  render(<InputForm setTypeCallback={mockSubmit} setQueryCallback={mockSubmit} />);
  const typeSelect = screen.getByTestId('select-type');

  return {
    typeSelect,
  };
};

describe('test input form', () => {
  test('Render input fields correctly', () => {
    const { typeSelect } = setup();

    expect(typeSelect).toBeInTheDocument();
  });

  test('Should display correct number of data asset type options', () => {
    const { typeSelect } = setup();
    expect(typeSelect).toHaveValue('');
    // TO-DO: test correct number of select options, test select dropdown
  });

  test('InputForm should submit correct output on initial render', () => {
    const mockSubmit = jest.fn();
    render(<InputForm setTypeCallback={mockSubmit} setQueryCallback={mockSubmit} />);

    fireEvent.submit(screen.queryByTestId('select-type'));
    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit.mock.calls).toEqual([
      [
        {
          'type': 'both',
        },
      ],
    ]);
  });
});
