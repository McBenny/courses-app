import { Lesson } from '../types/common.types';

const compare = (key: string, order: string = 'ASC') => {
    let sortOrder = 1;
    if (order === 'DESC') {
        sortOrder = -1;
    }
    return function (a: Lesson, b: Lesson) {
        let result = 0;
        // @ts-ignore
        if (a[key] < b[key]) {
            result = -1;
            // @ts-ignore
        } else if (a[key] > b[key]) {
            result = 1;
        }
        return result * sortOrder;
        // const result = (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
    };
};

export default compare;
