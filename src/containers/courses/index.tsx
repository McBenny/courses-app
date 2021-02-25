import React from 'react';
import PropTypes from 'prop-types';

import { Lessons } from '../../types/common.types';

import NoLessons from '../../components/no-lessons';
import CoursesList from '../../components/courses-list';

import './styles.scss';

function Courses(props: Lessons) {
    const { lessons } = props;
    const availableLessons = lessons.length > 0;

    if (availableLessons) {
        return (
            <div className="courses__list">
                <CoursesList lessons={lessons} />
            </div>
        );
    }
    return <NoLessons />;
}

Courses.propTypes = { lessons: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Courses;
