import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './index';

const emptyFunction = () => {};

test('render the search text input', () => {
    render(<Search searchCourse={emptyFunction} />);
    const inputElement = screen.getByPlaceholderText(/Type here to search/);
    expect(inputElement).toBeInTheDocument();
});

test('render the search button', () => {
    render(<Search searchCourse={emptyFunction} />);
    const inputElement = screen.getByText(/Search/);
    expect(inputElement).toBeInTheDocument();
});
