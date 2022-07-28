import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 81LSAe0SVMlxOkd7cCXkBVBgqvThl2QoGt9YXadSoUU'
    }
});