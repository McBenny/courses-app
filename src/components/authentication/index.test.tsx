import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Authentication from './index';

const notOpen = false;
const open = true;
const emptyFunction = () => {};

test('renders the popup with the form', () => {
    render(<Authentication open={open} handleClose={emptyFunction} authenticate={emptyFunction} />);
    const textElement = screen.getByText(/Please authenticate/);
    expect(textElement).toBeInTheDocument();
    const inputElement = screen.getByLabelText(/User name/);
    expect(inputElement).toBeInTheDocument();
});

test('doesnt render the popup', () => {
    render(<Authentication open={notOpen} handleClose={emptyFunction} authenticate={emptyFunction} />);
    const textElement = screen.queryByText(/Please authenticate/);
    expect(textElement).toBeNull();
});

test('removes the form, adds a line on click, then closes', async () => {
    render(<Authentication open={open} handleClose={emptyFunction} authenticate={emptyFunction} />);
    fireEvent.click(screen.getByText(/Log in/));
    await waitFor(() => screen.getByText('You\'re now authenticated'));
    const lineElement = screen.queryByText('You\'re now authenticated');
    expect(lineElement).toBeInTheDocument();
    const inputElement = screen.queryByLabelText(/User name/);
    expect(inputElement).toBeNull();
    setTimeout(() => {
        const textElement = screen.queryByText(/Please authenticate/);
        expect(textElement).toBeNull();
    }, 2000);
});
