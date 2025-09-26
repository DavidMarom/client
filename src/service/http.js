import axios from 'axios';

export const httpGet = (url) => {
    return axios.get(url,
        {
            withCredentials: true // Enable sending cookies with the request
        }
    )
        .then(response => response.data)
        .catch(error => { throw error });
};

export const httpPost = (url, body) => {
    return axios.post(url, body,
        {
            withCredentials: true // Enable sending cookies with the request
        }
    )
        .then(response => response.data)
        .catch(error => { throw error });
};
