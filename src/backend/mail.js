import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

//creamos la ruta
router.post('/enviar-mail', async (req, res) => {
    const {name, email, message} = req.body;

    // Configuramos el transporte del correo
    const transporter = nodemailer.createTransport({
        host : "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: `${name} <${email}>`,
            to: process.env.EMAIL_USER,
            subject: "Nuevo mensaje de contacto H1Congelados",
            text: message
        })
        res.status(200).json({success: true, message: 'Correo enviado correctamente'});
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({success: false, message: 'Error al enviar el correo'});
    }
})

export default router;