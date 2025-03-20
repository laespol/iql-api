const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Substitua pelo host SMTP do seu serviço
  port: 465, // Use a porta correta (465 para TLS ou 587 para STARTTLS)
  secure: true, // Use 'true' para 465 e 'false' para 587
  auth: {
    user: 'laespol@gmail.com', // Seu usuário
    pass: 'qbkq tloo jlrg ktqi', // Sua senha
  },
});

const mailOptions = {
  from: 'luis.espoladore@adcon.srv.br', // Remetente
  to: 'luis.espoladore@adcon.srv.br', // Destinatário
  subject: 'Teste Nodemailer',
  text: 'Este é um teste usando o Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Erro ao enviar e-mail:', error);
  } else {
    console.log('E-mail enviado:', info.response);
  }
});
