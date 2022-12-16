import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import InputForm from '../components/InputForm';

const setup = () => {
  render(<InputForm />);
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
    expect(typeSelect.length).toBe(4);
  });

  test('Form should submit correct output', () => {
    const mockSubmit = jest.fn();
    render(<InputForm handleData={mockSubmit} />);

    fireEvent.change(screen.queryByTestId('select-type'), {
      target: { value: 'Dataset' },
    });

    fireEvent.submit(screen.queryByTestId('form'));
    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit.mock.calls).toEqual([
      [
        {
          type: 'Dataset',
        },
      ],
    ]);
  });
});
