import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sorting from './index';

const validFunction = () => {};
test('renders 2 buttons', () => {
    render(<Sorting sortCourses={validFunction} />);
    const dateElement = screen.getAllByText(/Date/);
    expect(dateElement).toHaveLength(1);
    const durationElement = screen.getAllByText(/Duration/);
    expect(durationElement).toHaveLength(1);
});
