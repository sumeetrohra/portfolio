import axios from 'axios';

import {
    DATA_FETCH,
    PAGE_HEADER
} from './types';

export const fetchData = () => async dispatch => {
    let { data } = await axios.get('https://raw.githubusercontent.com/sumeetrohra/portfolioData/master/data.json');
    dispatch({
        type: DATA_FETCH,
        payload: data
    });
};

export const changeHeaderText = (text) => {
    return {
        type: PAGE_HEADER,
        payload: text,
    };
};
