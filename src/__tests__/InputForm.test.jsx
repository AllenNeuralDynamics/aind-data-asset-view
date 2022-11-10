import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import InputForm from '../components/InputForm';

const setup = () => {
  render(<InputForm />);
  const buttonElement = screen.getByTestId('submit-btn');
  const orderSelect = screen.getByTestId('select-sort-order');
  const sortFieldSelect = screen.getByTestId('select-sort-field');
  const startIndex = screen.getByTestId('start-index');
  const limitIndex = screen.getByTestId('limit-index');

  return {
    buttonElement,
    orderSelect,
    sortFieldSelect,
    startIndex,
    limitIndex,
  };
};

describe('test input form', () => {
  test('Render input fields correctly', () => {
    const {
      buttonElement,
      orderSelect,
      sortFieldSelect,
      startIndex,
      limitIndex,
    } = setup();

    expect(buttonElement).toBeInTheDocument();
    expect(orderSelect).toBeInTheDocument();
    expect(sortFieldSelect).toBeInTheDocument();
    expect(startIndex).toBeInTheDocument();
    expect(limitIndex).toBeInTheDocument();
  });

  test('Should display correct number of data asset type options', () => {
    const { typeSelect } = setup();
    expect(typeSelect.length).toBe(3);
  });

  test('Should display correct number of sort field options', () => {
    const { sortFieldSelect } = setup();
    expect(sortFieldSelect.length).toBe(4);
  });

  test('Show selected sort field option on click', async () => {
    const { sortFieldSelect } = setup();
    expect(sortFieldSelect.value).toEqual('Created');

    fireEvent.change(sortFieldSelect, { target: { value: 'Size' } });
    expect(sortFieldSelect.value).toEqual('Size');
  });

  test('Displays correct number of sort order options', () => {
    const { orderSelect } = setup();
    expect(orderSelect.length).toBe(2);
  });

  test('Show selected sort order on click', async () => {
    const { orderSelect } = setup();
    fireEvent.change(orderSelect, { target: { value: 'desc' } });
    expect(orderSelect.value).toEqual('desc');
  });

  test('Should default number for start index', () => {
    const { startIndex } = setup();
    expect(startIndex.value).toBe('0');
  });

  test('Should clear form and type number 30 for start index', async () => {
    const { startIndex } = setup();
    userEvent.clear(startIndex);
    userEvent.type(startIndex, '30');
    expect(startIndex.value).toBe('30');
  });

  test('Should default number for limit index', () => {
    const { limitIndex } = setup();
    expect(limitIndex.value).toBe('0');
  });

  test('Should clear form and type number 125 for start index', async () => {
    const { limitIndex } = setup();
    userEvent.clear(limitIndex);
    userEvent.type(limitIndex, '125');
    expect(limitIndex.value).toBe('125');
  });

  test('Form should submit correct output', () => {
    const mockSubmit = jest.fn();
    render(<InputForm handleData={mockSubmit} />);

    fireEvent.change(screen.queryByTestId('start-index'), {
      target: { value: '9' },
    });
    fireEvent.change(screen.queryByTestId('limit-index'), {
      target: { value: '10' },
    });
    fireEvent.change(screen.queryByTestId('select-sort-order'), {
      target: { value: 'asc' },
    });
    fireEvent.change(screen.queryByTestId('select-sort-field'), {
      target: { value: 'Created' },
    });
    fireEvent.submit(screen.queryByTestId('form'));
    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit.mock.calls).toEqual([
      [
        {
          start: '9',
          limit: '10',
          sort_order: 'asc',
          sort_field: 'Created',
        },
      ],
    ]);
  });
});
