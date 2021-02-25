import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Lessons } from '../../types/common.types';

import NoLessons from '../../components/no-lessons';
import Search from '../../components/search';
import CoursesList from '../../components/courses-list';

import './styles.scss';

function Courses(props: Lessons) {
    const { lessons } = props;
    const availableLessons = lessons.length > 0;
    const [displayedLessons, setDisplayedLessons] = useState(lessons);

    const searchCourse = (keyword: string) => {
        const regex = new RegExp(keyword, 'i');
        setDisplayedLessons(lessons.filter((lesson) => regex.test(lesson.name)));
    };

    if (availableLessons) {
        return (
            <>
                <Search searchCourse={searchCourse} />
                <div className="courses__list">
                    <CoursesList lessons={displayedLessons} />
                </div>
            </>
        );
    }
    return <NoLessons />;
}

Courses.propTypes = { lessons: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Courses;
