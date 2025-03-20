const net = require('net');
const tls = require('tls');

// Configuração do servidor SMTP
const SMTP_SERVER = 'smtp.gmail.com'; // Substitua pelo servidor SMTP (ex.: smtp.gmail.com)
const SMTP_PORT = 465; // Porta SMTP segura (ex.: 465 para TLS)
const USER = 'laespol@gmail.com'; // Seu e-mail de login
const PASSWORD = 'qbkq tloo jlrg ktqi'; // Sua senha de e-mail

// Detalhes do e-mail
const FROM = 'luis.espoladore@adcon.srv.br'; // Endereço do remetente
const TO = 'luis.espoladore@adcon.srv.br'; // Endereço do destinatário
const SUBJECT = 'Teste de envio de e-mail sem Nodemailer';
const MESSAGE = 'Este é um teste de envio de e-mail diretamente via Node.js usando o protocolo SMTP.';

function sendEmail() {
  const socket = tls.connect(SMTP_PORT, SMTP_SERVER, { rejectUnauthorized: false }, () => {
    console.log('Conectado ao servidor SMTP.');

    // Função para enviar comandos ao servidor
    const sendCommand = (command) => new Promise((resolve) => {
      socket.write(command + '\r\n', resolve);
    });

    (async () => {
      // Comunicação inicial com o servidor SMTP
      await sendCommand(`EHLO ${SMTP_SERVER}`);
      await sendCommand(`AUTH LOGIN`);
      await sendCommand(Buffer.from(USER).toString('base64'));
      await sendCommand(Buffer.from(PASSWORD).toString('base64'));
      await sendCommand(`MAIL FROM:<${FROM}>`);
      await sendCommand(`RCPT TO:<${TO}>`);
      await sendCommand(`DATA`);
      
      // Montando o conteúdo do e-mail
      await sendCommand(
        `Subject: ${SUBJECT}\r\n` +
        `To: ${TO}\r\n` +
        `From: ${FROM}\r\n` +
        `\r\n` +
        `${MESSAGE}\r\n` +
        `.`
      );

      await sendCommand(`QUIT`);
      console.log('E-mail enviado com sucesso!');
      socket.end();
    })().catch((error) => {
      console.error('Erro ao enviar o e-mail:', error);
      socket.end();
    });
  });

  socket.on('error', (err) => {
    console.error('Erro na conexão com o servidor SMTP:', err);
  });

  socket.on('data', (data) => {
    console.log('Resposta do servidor SMTP:', data.toString());
  });
}

sendEmail();
