const express = require('express');
const path = require('path');
// Crear el servidor 
const app = express();
const server = require('http').createServer(app);
const conectarDB = require('./config/db');

// Conectar DB
conectarDB()
//  ====== BORRAR =======
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));
// Habilitar express.js
app.use(express.json({ extend: true }));

// Puerto del servidor 
const PORT = process.env.PORT || 3000;
// Importar Rutas
app.use('/user', require('./routes/user'))


// Path Público

// Definir Página Principal
// app.get('/', (req,res)=>{
//     res.send('Servido OK');
//     console.log(req);
// });

// Arrancar servidor
server.listen(PORT, () => {
    console.log(`servidor Corriendo en el puerto ${PORT}`);
})

