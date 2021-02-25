import React from 'react';
import { render, screen } from '@testing-library/react';
import NoLessons from './index';

test('renders default text', () => {
    render(<NoLessons />);
    const defaultText = screen.getByText(/There are no lessons at the moment/i);
    expect(defaultText).toBeInTheDocument();
});
