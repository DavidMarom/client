import { httpPost } from './http';

export const login = (username, password) => {
    return httpPost('http://localhost:3000/login', {
        username,
        password
    })
        .then(data => { localStorage.setItem('token', data.bearer) })
        .catch((error) => { console.error('== Error:', error) });
}

export const logout = () => {
    localStorage.removeItem('token');
}

export const isLoggedIn = () => {
    return localStorage.getItem('token') != null;
}

export const register = (username, password) => {
    return httpPost('http://localhost:3000/register', {
        username,
        password
    })
        .then(data => { console.log('== Registered successfully:', data); return data; })
        .catch((error) => { console.error('== Error registering user:', error); throw error });
}

