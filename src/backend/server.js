import express from 'express';
import cors from 'cors';
import router from './routes/mail.js';

const app = express();

app.use(cors({
  origin: "https://h1congelados.com.ar" // o poné tu dominio, ej: "https://h1congelados.com.ar"
}));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
