import axios from 'axios';

export const getPost = id => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export const getUsers = id => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
}
