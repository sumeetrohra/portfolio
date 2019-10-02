import {
    DATA_FETCH,
} from '../actions/types';

const INITIAL_STATE = {
    data: {},
    header: 'Sumeet Rohra'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DATA_FETCH:
            return { ...state, data: action.payload };

        default:
            return state;
    }
}