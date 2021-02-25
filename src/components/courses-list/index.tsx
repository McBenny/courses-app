import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from '@material-ui/core';

import { Lesson, Lessons } from '../../types/common.types';

import './styles.scss';

function CoursesList(props: Lessons) {
    const displayLessons = () => (
        props.lessons.map((lessonItem: Lesson) => {
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
                        <dd className="course__content course__content--description">{description}</dd>
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
                {displayLessons()}
            </List>
        </div>
    );
}

CoursesList.propTypes = { lessons: PropTypes.arrayOf(PropTypes.object).isRequired };

export default CoursesList;
