require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Criar o servidor de express
const app = express();

// Configurar CORS
app.use( cors() );

// Leitura e parse do body
app.use( express.json() );

// Base de datos
dbConnection();

// Rotas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/login', require('./routes/auth') );



app.listen( process.env.PORT, () => {
    console.log('Servidor correndo na puerta ' + process.env.PORT );
});


