
export const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

// Search user in local storage
export const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if( user ) {
        return user;
    }

    return false;
}


export const saveToken = (token) => {
    localStorage.setItem('token', token);
}

export const getToken = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if( token ) {
        return token;
    }

    return false;
}
