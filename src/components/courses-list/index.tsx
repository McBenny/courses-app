import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, List, ListItem } from '@material-ui/core';

import { Lesson } from '../../types/common.types';

import Authentication from '../authentication';

import './styles.scss';

function CoursesList(props: { lessons: Lesson[], authenticated: boolean, authenticate: (value: boolean) => void }) {
    const { lessons, authenticated, authenticate } = props;
    const [authenticationWindowStatus, setAuthenticationWindowStatus] = useState(false);

    const addCourse = (lessonName: string) => {
        // As this feature is not yet developed, I placed logs to identify the action to be taken
        if (authenticated) {
            // eslint-disable-next-line no-console
            console.log('straight to cart with course', lessonName);
        } else {
            // eslint-disable-next-line no-console
            console.log('must authenticate before storing', lessonName);
            setAuthenticationWindowStatus(true);
        }
    };

    const displayLessons = (lessonsList: Lesson[]) => (
        lessonsList.map((lessonItem: Lesson) => {
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
                    <Button
                        className="course__button"
                        size="small"
                        variant="outlined"
                        onClick={() => addCourse(lessonItem.name)}
                    >
                        Add course
                    </Button>
                </ListItem>
            );
        })
    );

    return (
        <div className="courses">
            <List component="ul">
                {displayLessons(lessons)}
            </List>
            <Authentication
                open={authenticationWindowStatus}
                handleClose={() => setAuthenticationWindowStatus(false)}
                authenticate={() => authenticate(true)}
            />
        </div>
    );
}

CoursesList.defaultProps = { authenticated: false };

CoursesList.propTypes = {
    lessons: PropTypes.arrayOf(PropTypes.object).isRequired,
    authenticated: PropTypes.bool,
    authenticate: PropTypes.func.isRequired
};

export default CoursesList;
