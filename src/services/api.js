import axios from 'axios';
const URL = 'http://192.168.254.13:3333/';    //DESENV
//const URL = 'http://35.247.221.176:3333/';      //PRODRUÇÃO

const api = axios.create({
    baseURL: URL,
})

export default api;
