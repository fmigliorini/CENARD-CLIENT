import {
    SING_IN,
    SING_OUT,
} from '../constants/actionTypes';

const initialState = {
    authenticate : true,
    id: null,
    name:null,
    apellido:null,
    numeroDoc:null,
    email:null,
    direccion:null,
    fechaNacimiento:null,
    rol:null,
    idNacionalidad:null,
    idTipoDoc:null,
    idGenero:null,
    idProvincia:null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SING_IN:
            return {
                ...state,
                authenticate: true,
                id: action.payload.id,
                rol: action.payload.rol,
                email: action.payload.email,
                name: action.payload.nombre
            }
        case SING_OUT:
            return {
                ...state,
                id: null,
                rol: null,
                email: null,
                name: null,
                authenticate: false,
            }
        default:
            return state;
    }
}