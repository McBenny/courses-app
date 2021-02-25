import React from 'react';
import { render, screen } from '@testing-library/react';
import Courses from './index';

test('renders a list of 4 courses', () => {
    render(<Courses />);
    const linkElement = screen.getAllByText('Author');
    expect(linkElement).toHaveLength(4);
});
