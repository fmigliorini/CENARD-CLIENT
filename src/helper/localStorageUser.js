
export const saveUser = (idUser) => {
    localStorage.setItem('user', idUser);
}

// Search user in local storage
export const getUserStorage = () => {
    const user = localStorage.getItem('user');
    if( user !== 'undefined' ) {
        return user;
    }

    return false;
}


export const saveToken = (token) => {
    localStorage.setItem('token', token);
}

export const getTokenStorage = () => {
    const token = localStorage.getItem('token');
    if( token ) {
        return token;
    }

    return false;
}
