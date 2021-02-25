import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './index';

const validFunction = () => {};
test('render the search text input', () => {
    render(<Search searchCourse={validFunction} />);
    const inputElement = screen.getByPlaceholderText(/Type here to search/);
    expect(inputElement).toBeInTheDocument();
});

test('render the search button', () => {
    render(<Search searchCourse={validFunction} />);
    const inputElement = screen.getByText(/Search/);
    expect(inputElement).toBeInTheDocument();
});
