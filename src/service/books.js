import { httpGet } from './http';

export const fetchBooks = () => {

    return httpGet(
        'http://localhost:3000/books',
        localStorage.getItem('token')
    )
        .then(data => { console.log('Books:', data); return data; })
        .catch((error) => { console.error('== Error fetching books:', error); throw error });
};
