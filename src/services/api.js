import axios from 'axios';
const URL = 'http://192.168.254.10:3344/';


const api = axios.create({
    baseURL: URL,
})

export default api;