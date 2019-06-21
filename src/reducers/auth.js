import {
    SING_IN,
    SING_OUT,
} from '../constants/actionTypes';

const initialState = {
    authenticate : true,
    rol: 'admin',
    token : null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SING_IN:
            return {
                ...state,
                token: action.payload.token,
                rol: action.payload.rol,
                authenticate: true,
            }
        case SING_OUT:
            return {
                ...state,
                token: null,
                rol: null,
                authenticate: false,
            }
        default:
            return state;
    }
}