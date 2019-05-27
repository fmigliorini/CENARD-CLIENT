import {
    GET_EVENT,
} from '../constants/actionTypes';

const initialState = {
    'items' : [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_EVENT:
            console.log("reducer LOGIN_SUBMIT");
            return {
                ...state,
                items: action.payload,
            }
        default:
            return state;
    }
}