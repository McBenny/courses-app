import React from 'react';
import ReactDOM from 'react-dom';
import './styles/core.scss';
import Courses from './containers/courses';

ReactDOM.render(
    <React.StrictMode>
        <Courses />
    </React.StrictMode>,
    document.getElementById('root')
);
