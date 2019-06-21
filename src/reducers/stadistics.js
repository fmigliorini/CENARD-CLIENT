import {
    STADISTICS_USER_GET,
    STADISTICS_TOURNAMENT_GET
} from '../constants/actionTypes';

const initialState = {
    'stadisticsUser' : [],
    'stadistiscTournament' : [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case STADISTICS_USER_GET:
            return {
                ...state,
                stadisticsUser: action.payload,
            }
        case STADISTICS_TOURNAMENT_GET:
            return {
                ...state,
                stadistiscTournament: action.payload
            } 
        default:
            return state;
    }
}