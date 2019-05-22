import {
    LOGIN_SUBMIT,
} from '../constants/actionTypes';

const initialState = {
    'token' : null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUBMIT:
            console.log("reducer LOGIN_SUBMIT");
            return {
                ...state,
                token: action.payload,
            }
        default:
            return state;
    }
}