import {
    DATA_FETCH,
    PAGE_HEADER,
} from '../actions/types';

const INITIAL_STATE = {
    data: {},
    header: 'Sumeet Rohra'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DATA_FETCH:
            return { ...state, data: action.payload };

        case PAGE_HEADER:
            return { ...state, header: action.payload }

        default:
            return state;
    }
}