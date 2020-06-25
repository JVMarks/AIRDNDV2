import axios from 'axios';

const api = axios.create({
   baseURL: process.env.REACT_APP_API_URL ,
});

//http://192.168.56.1:1119

// .env REACT_APP_API_URL=http://localhost:1119

export default api;