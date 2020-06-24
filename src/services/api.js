import axios from 'axios';
const URL = 'http://192.168.0.113:3344/';

const api = axios.create({
    baseURL: URL,
})

export default api;