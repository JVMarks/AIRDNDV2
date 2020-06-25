const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const path = require ('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-apskq.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connectedUsers = {};

io.on('connection', socket => {
   const { user_id } = socket.handshake.query;

   connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;



  return next();
})

//SAO METADOS PARA app. GET, POST, PUT ,DELETE

//req.query = acessar query params (para filtros)
//req.params = acessar route params (para edição, delete)
//req.body =  acessar corpo da requisição (para criação , edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')));
app.use(routes);


server.listen(process.env.PORT || 1119);

//server.listen(1119);

//yarn init -y para baixar o pacote
// yarn add nodemon -D
//yarn dev para iniciar o servidor
// banco de dados yarn add mongoose
//^C fechar servidors
//yarn add multer
//yarn add socket.io


//heroku criar um server 
// heroku logs -a NOMEDOAPP para ver erros
//GIT
//CD 
//GIT INIT
//GIT ADD .
//GIT ADD --ALL
//GIT COMMIT -M "NOME DO COMMIT"
//GIT PULL
//GIT PUSH
