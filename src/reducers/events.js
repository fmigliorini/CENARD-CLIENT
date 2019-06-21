import {
    GET_EVENT,
} from '../constants/actionTypes';

const initialState = {
    'itemsUser' : [],
    'itemsTournament' : [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_EVENT:
            return {
                ...state,
                items: action.payload,
            }
        default:
            return state;
    }
}