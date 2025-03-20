const { PrismaClient: PrismaClientCorp } = require('./prisma/client/corp');
const { PrismaClient: PrismaClientIql } = require('./prisma/client/iql');



const nodemailer = require('nodemailer'); // Importa o módulo principal

const corp = new PrismaClientCorp();
const iql = new PrismaClientIql();
async function main() {

    console.log('entrei aqui');

//    let testAccount = await nodemailer.createTestAccount();

    console.log('saida2')
    let sendmail;
    let info;

    console.log('saida daqui')

    /*    let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'suporte.ti@zanthus.com.br',
                        pass: 'awstx#'
                    },
                    
                });  
    
                const transporter = nodemailer.createTransport({
                    host: 'smtp-mail.outlook.com',
                    port: 587, // Porta 587 para TLS/STARTTLS
                    secure: false, // Defina como 'true' se estiver usando a porta 465 (SSL)
                    auth: {
                      user: 'laespol@hotmail.com', // Seu e-mail do Hotmail/Outlook
                      pass: 'Teste01#'   // Sua senha do Hotmail
                    },
                    tls: {
                      rejectUnauthorized: false // Apenas para testes em desenvolvimento (não recomendado em produção)
                    }
                  });
    */

                  console.log('createTransport')

                  const transporter = nodemailer.createTransport({
                    service: "Gmail",
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                      user: "laespol@gmail.com",
                      pass: "qbkq tloo jlrg ktqi",
                    },
                  });


    sendmail = await iql.sendmail.findMany({
        where: {
            status: 'A'
        }, select: {
            idsendmail: true,
            destinatario: true,
            html: true,
            subject: true,
            status: true,
        },
        orderBy: {
            createdAt: "desc"
        }
    })

    await iql.$disconnect()
    //    console.log(sendmail.length);
    //   console.log(JSON.stringify(sendmail));

    for (let i = 0; i <= sendmail.length - 1; i++) {
        console.log(i + " " + JSON.stringify(sendmail[i]));

        info = await transporter.sendMail({
            from: 'luis.espoladore@adcon.srv.br',
            to: sendmail[i].destinatario,
            subject: sendmail[i].subject,
            html: sendmail[i].html
        });

        //        console.log("Message sent: %s", info.messageId);

        //        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        console.log("sendmail[i].idsendmail ================> " + sendmail[i].idsendmail);
        deleteSendmail = await iql.sendmail.update({
            where: {
                idsendmail: sendmail[i].idsendmail,
            },
            data: {
                iduserupdatedAt: 99999,
                status: "E"
            },
        });
    }
}
main().catch(console.error);