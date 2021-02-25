import React from 'react';
import ReactDOM from 'react-dom';
import './styles/core.scss';
import Courses from './containers/courses';

ReactDOM.render(
    <React.StrictMode>
        <main className="app">
            <h1 className="title title--1">Available courses</h1>
            <Courses />
        </main>
    </React.StrictMode>,
    document.getElementById('root')
);
