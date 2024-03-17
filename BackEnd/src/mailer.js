const nodeMailer = require('nodemailer');

//Transportador del correo
const transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'tepuyzen24@gmail.com',
    pass: 'futuppzjczswsqck',
  },
  tls: {
    // Solucion de error de TLS
    rejectUnauthorized: false,
  },
});

//Correo a enviar
const sendEmail = (data) => {
  const { nombre, apellido, fechaEntrada, fechaSalida, correo} = data;
  
  const mail = {
    from: 'tepuyzen24@gmail.com',
    to: correo,
    subject: `Reserva de hotel`,
    html: `
    <div style="font-family: Arial, sans-serif; text-align: center;">
    <h2 style="color: #333;">¡Gracias por reservar en Tepuy Zen!</h2>
    <img src="https://i.ibb.co/3N0hWCv/logo.png" alt="Logo" style="width: 50%; height: auto;">
    <p style="color: #666; margin-bottom: 20px;">Estimado(a) ${nombre} ${apellido},</p>
    <p style="color: #666; margin-bottom: 20px;">Tu reserva ha sido confirmada para las fechas ${fechaEntrada} - ${fechaSalida}.</p>
    <p style="color: #666; margin-bottom: 20px;">Para cualquier consulta o modificación, no dudes en contactarnos, <a>tepuyzen24@gmail.com</a> .</p>
    <p style="color: #666; margin-bottom: 20px;">¡Esperamos que tengas una estancia agradable en Tepuy Zen! El pago se hara efectuado el dia de llegada a tu reserva</p>
    <p style="color: #666; margin-bottom: 20px;">Atentamente,</p>
    <h3 style="color: black; margin-bottom: 20px; margin-top: 20px;">El equipo de Tepuy Zen</h3>
    </div>    
    `,
  };

  // Manejo de errores
  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error);
    } else {
      console.log('Email sent.');
    }
  });
};

module.exports = { sendEmail };
