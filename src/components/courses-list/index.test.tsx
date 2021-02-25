import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CoursesList from './index';

const coursesList = [
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
    },
    {
        name: 'CSS Animations',
        description: 'Learn how to animate anything in CSS',
        author: 'Alan Smith',
        publishDate: '04/12/2018',
        duration: '00:02:11',
        image: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png'
    },
    {
        name: 'JS - Zero to hero',
        description: 'Everything you need to know in JS',
        author: 'Sarah Parker',
        publishDate: '12/03/2019',
        duration: '01:01:35',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png'
    }
];
const notAuthenticated = false;
const authenticated = true;
const emptyFunction = () => {};

test('renders a list of 4 courses', () => {
    render(<CoursesList lessons={coursesList} authenticated={notAuthenticated} authenticate={emptyFunction} />);
    const textElement = screen.getAllByText('Author');
    expect(textElement).toHaveLength(4);
});

test('add button is rendered', () => {
    render(<CoursesList lessons={coursesList} authenticated={notAuthenticated} authenticate={emptyFunction} />);
    const buttonElement = screen.getAllByText('Add course');
    expect(buttonElement).toHaveLength(4);
});

test('authentication popup is rendered', async () => {
    render(<CoursesList lessons={coursesList} authenticated={notAuthenticated} authenticate={emptyFunction} />);
    fireEvent.click(screen.getAllByText('Add course')[0]);
    const popupElement = screen.queryByText(/Please authenticate/);
    expect(popupElement).toBeInTheDocument();
});

test('authentication popup is not rendered', async () => {
    render(<CoursesList lessons={coursesList} authenticated={authenticated} authenticate={emptyFunction} />);
    fireEvent.click(screen.getAllByText('Add course')[0]);
    const popupElement = screen.queryByText(/Please authenticate/);
    expect(popupElement).toBeNull();
});
