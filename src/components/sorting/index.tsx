import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import './styles.scss';

interface SortProps {
    sortCourses: (keyword: string, order: string | undefined) => void
}

const ORDERS = {
    asc: 'ASC',
    desc: 'DESC'
};

const Sorting = (props: SortProps) => {
    const { sortCourses } = props;
    const [orderDate, setOrderDate] = useState(ORDERS.asc);
    const [orderDuration, setOrderDuration] = useState(ORDERS.asc);

    return (
        <>
            <p className="sorting">
                Sort by:
                <Button
                    className="sorting__button"
                    variant="outlined"
                    size="small"
                    onClick={() => {
                        sortCourses('sortableDate', orderDate);
                        setOrderDate(orderDate === ORDERS.asc ? ORDERS.desc : ORDERS.asc);
                    }}
                >
                    Date ({orderDate})
                </Button>
                <Button
                    className="sorting__button"
                    variant="outlined"
                    size="small"
                    onClick={() => {
                        sortCourses('duration', orderDuration);
                        setOrderDuration(orderDuration === ORDERS.asc ? ORDERS.desc : ORDERS.asc);
                    }}
                >
                    Duration ({orderDuration})
                </Button>
            </p>
        </>
    );
};

Sorting.propTypes = { sortCourses: PropTypes.func.isRequired };

export default Sorting;
