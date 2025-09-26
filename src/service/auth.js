import { httpPost } from './http';

export const login = () => {
    return httpPost('http://localhost:3000/login', {
        username: "user",
        password: "pass"
    })
        .then(data => { console.log('Success:', data) })
        .catch((error) => { console.error('== Error:', error) });
}

