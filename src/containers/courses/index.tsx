import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Lesson, Lessons } from '../../types/common.types';
import compare from '../../helpers/utils';

import NoLessons from '../../components/no-lessons';
import Search from '../../components/search';
import Sorting from '../../components/sorting';
import CoursesList from '../../components/courses-list';

import './styles.scss';

function Courses(props: Lessons) {
    const { lessons } = props;
    const availableLessons = lessons.length > 0;
    const sortableLessons = lessons.map((lesson: Lesson) => {
        const [day, month, year] = lesson.publishDate.split('/');
        const sortableDate = [year, month, day].join('-');
        return {
            ...lesson,
            sortableDate
        };
    });
    const [displayedLessons, setDisplayedLessons] = useState(sortableLessons);

    const searchCourse = (keyword: string) => {
        const regex = new RegExp(keyword, 'i');
        setDisplayedLessons(sortableLessons.filter((lesson) => regex.test(lesson.name)));
    };

    const sortLessons = (criteria: string, order: string | undefined) => {
        const sortedLessons = [...displayedLessons].sort(compare(criteria, order));
        setDisplayedLessons(sortedLessons);
    };

    const [authenticated, setAuthenticated] = useState(false);

    if (availableLessons) {
        return (
            <>
                <Search searchCourse={searchCourse} />
                <Sorting sortCourses={sortLessons} />
                <div className="courses__list">
                    <CoursesList
                        lessons={displayedLessons}
                        authenticated={authenticated}
                        authenticate={setAuthenticated}
                    />
                </div>
            </>
        );
    }
    return <NoLessons />;
}

Courses.propTypes = { lessons: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Courses;
