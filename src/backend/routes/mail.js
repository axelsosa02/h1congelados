import express from 'express';
import { Resend } from 'resend';

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

//creamos la ruta
router.post('/enviar-mail', async (req, res) => {
    const {name, email, message,number} = req.body;

    try {
        await resend.emails.send({
            from: `${name} <contacto@h1congelados.com.ar>`,
            to: ["h1eloreconquista@gmail.com"],
            reply_to: email,
            subject: `Nuevo mensaje de ${name} - con número ${number}`,
            text: message
        });
        res.status(200).json({success: true, message: 'Correo enviado correctamente'});
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({success: false, message: 'Error al enviar el correo'});
    }
})

export default router;