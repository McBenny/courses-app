import React, { useState, ChangeEvent } from 'react';
import PropTypes from 'prop-types';

import { InputLabel, Button, TextField } from '@material-ui/core';

import './styles.scss';

interface SearchProps {
    searchCourse: (keyword: string) => void
}

const Search = (props: SearchProps) => {
    const { searchCourse } = props;
    const [keyword, setKeyword] = useState('');
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    return (
        <form className="search">
            <InputLabel htmlFor="keyword" className="sr-only">Type here to search...</InputLabel>
            <TextField
                id="keyword"
                className="search__keyword"
                variant="outlined"
                size="small"
                placeholder="Type here to search..."
                value={keyword}
                onChange={handleSearchChange}
            />
            <Button
                className="search__button"
                variant="outlined"
                onClick={() => searchCourse(keyword)}
            >
                Search
            </Button>
        </form>
    );
};

Search.propTypes = { searchCourse: PropTypes.func.isRequired };

export default Search;
