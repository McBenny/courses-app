import React from 'react';
import './styles.scss';
import { List, ListItem } from '@material-ui/core';

import NoLessons from '../../components/no-lessons';

// interface lesson {
//     name: string,
//     description: string,
//     author: string,
//     publishDate: string,
//     duration: string,
//     image: string
// }

const coursesList = [
    {
        lessons: [
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
        ]
    }
];

function Courses() {
    const { lessons } = coursesList[0];

    const displayLessons = () => (
        lessons.map((lessonItem) => {
            const { name, description, author, publishDate, duration, image } = lessonItem;
            return (
                <ListItem
                    key={name}
                    className="courses__course course"
                >
                    <img src={image} alt={name} className="course__illustration" />
                    <dl className="course__data">
                        <dt className="course__data-type"><span className="sr-only">Title</span></dt>
                        <dd className="course__content course__content--title">{name}</dd>
                        <dt className="course__data-type"><span className="sr-only">Description</span></dt>
                        <dd className="course__content">{description}</dd>
                        <dt className="course__data-type">Author</dt>
                        <dd className="course__content">{author}</dd>
                        <dt className="course__data-type">Publish date</dt>
                        <dd className="course__content">{publishDate}</dd>
                        <dt className="course__data-type">Duration</dt>
                        <dd className="course__content">{duration}</dd>
                    </dl>
                </ListItem>
            );
        })
    );

    return (
        <div className="courses">
            <List component="nav">
                { lessons.length > 0 ? displayLessons() : <NoLessons /> }
            </List>
        </div>
    );
}

export default Courses;
