import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders Button component', () => {
    const label = 'Click me';
    const onClick = jest.fn();
    const { getByText } = render(<Button label={label} onClick={onClick} />);
    const buttonElement = getByText(label);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
});
