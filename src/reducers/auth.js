import {
    SING_IN,
    SING_OUT,
} from '../constants/actionTypes';

const initialState = {
    authenticate : false,
    id: null,
    rol: null,
    email: null,
    name: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SING_IN:
            return {
                ...state,
                rol: action.payload.rol,
                authenticate: true,
            }
        case SING_OUT:
            return {
                ...state,
                rol: null,
                authenticate: false,
            }
        default:
            return state;
    }
}