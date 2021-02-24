import React from 'react';
import { render, screen } from '@testing-library/react';
import Courses from './index';

test('renders learn react link', () => {
    render(<Courses />);
    const linkElement = screen.getByText(/Default text/i);
    expect(linkElement).toBeInTheDocument();
});
