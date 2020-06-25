import axios from 'axios';

const api = axios.create({
  baseURL: 'https://airdnd-backend.herokuapp.com/',
});



export default api;

//PARA CRIAR UM NOVO PROJETO REACT-NATIVE USE 'react-native init nome do projeto' 
// para rodar no react-native é necessario dar um yarn start

//tirei o corns do package.json