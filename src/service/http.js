import axios from 'axios';

export const httpGet = (url, token) => {
    return axios.get(url, {
        withCredentials: true, // Enable sending cookies with the request
        headers: {
            Authorization: token
        }
    }
    )
        .then(response => response.data)
        .catch(error => error.response.data);
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
