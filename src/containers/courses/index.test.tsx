import React from 'react';
import { render, screen } from '@testing-library/react';
import Courses from './index';

const lessons0: [] = [];
const lessons2 = [
    {
        name: 'React - basics',
        description: 'This course is going to take you through basics of React.',
        author: 'James White',
        publishDate: '12/03/2019',
        duration: '00:03:56',
        image: 'https://cdn.auth0.com/blog/react-js/react.png'
    },
    {
        name: 'Vue - learn vue in an hour',
        description: 'This course teaches you how to build a vue application in an hour.',
        author: 'Michael Brown',
        publishDate: '17/10/2019',
        duration: '00:00:59',
        image: 'https://vuejs.org/images/logo.png'
    }
];

test('renders a list of 2 courses', () => {
    render(<Courses lessons={lessons2} />);
    const authorElement = screen.getAllByText('Author');
    expect(authorElement).toHaveLength(2);
});

test('renders no list', () => {
    render(<Courses lessons={lessons0} />);
    const noLessonsElement = screen.getByText(/There are no lessons at the moment/);
    expect(noLessonsElement).toBeInTheDocument();
});
