const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require(`body-parser`); 
const authRouter = require('./src/routes/authRoute')
const opinionRouter = require('./src/routes/opinionRoute')
const routes = require('./src/routes/articleRoutes');
const tipsRouter = require('./src/routes/tipRoute');
const guiasRouter = require('./src/routes/guiasRoutes');
const serviciosRouter = require('./src/routes/serviciosRouter');


const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' })); // Middleware para analizar cuerpos de solicitud JSON con un límite de tamaño
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); // Middleware para analizar cuerpos de solicitud URL codificados con un límite de tamaño


// Middleware para manejar errores de carga demasiado grandes
app.use((err, req, res, next) => {
  // Verifica si el error es de tipo 'payload too large'
  if (err && err instanceof SyntaxError && err.status === 413 && 'body' in err) {
    res.status(413).send('Payload too large'); // Envia una respuesta de error cuando el cuerpo de la solicitud es demasiado grande
  } else {
    next(); // Pasa al siguiente middleware si no hay errores de carga demasiado grandes
  }
});

//Rutas
app.use('/api/auth', authRouter);
app.use('/opinion', opinionRouter);
app.use('/api', routes);
app.use('/api', tipsRouter);
app.use('/api', guiasRouter);
app.use('/api', serviciosRouter);


//Mongo DB
mongoose.connect('mongodb://localhost:27017/auth')
.then(() => console.log('Conectado a la BD'))
.catch((error) => console.log('Fallo al conectar con MongoDb: ', error));


// Global Error
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'An error occurred';
  
    res.status(statusCode).json({
      status: 'error',
      message,
    });
  });
  
// Server
const PORT = 3000;
app.listen (PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
})