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
const test = {
    authenticate : true,
    id:6,
    nombre:"Erika",
    apellido:"Romanczuk",
    numeroDoc:"37481033",
    email:"erikaromanczuk@gmail.com",
    contraseña:"1234",
    direccion:"Direccion",
    fechaNacimiento:"1990-01-12T00:00:00",
    rol:'clasificador',
    idNacionalidad:4,
    idTipoDoc:1,
    idGenero:2,
    idProvincia:3
}

export default (state = test, action) => {
    switch(action.type) {
        case SING_IN:
            return {
                ...state,
                authenticate: true,
                id: action.payload.id,
                rol: action.payload.rol,
                email: action.payload.email,
                name: action.payload.name
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