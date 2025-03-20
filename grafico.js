const { PrismaClient: PrismaClientIql } = require('./prisma/client/iql');
const ChartJS = require('chart.js');
const { createCanvas } = require('canvas');

const iql = new PrismaClientIql();

ChartJS.Chart.register(
    ChartJS.CategoryScale,
    ChartJS.LinearScale,
    ChartJS.BarController,
    ChartJS.LineController,
    ChartJS.BarElement,
    ChartJS.PointElement,
    ChartJS.LineElement,
    ChartJS.Title,
    ChartJS.Tooltip,
    ChartJS.Legend
);

async function main() {
    console.log("entrei");
    await enviaemail();

    let html = '';
}

async function generateChart() {
    const width = 800;
    const height = 600;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    new ChartJS.Chart(ctx, {
        type: 'line', // ou 'bar', 'pie', etc.
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
            datasets: [
                {
                    label: 'Vendas',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
        },
    });

    return canvas.toDataURL('image/png');
}

async function enviaemail() {
    const chartImage = await generateChart(); // Gera o gráfico como base64
    let html = html + `
            <h2>Relatório de Vendas</h2>
            <p>Abaixo o gráfico das vendas:</p>
            <img src="${chartImage}" alt="Gráfico de Vendas" style="width:100%; max-width:800px;">
        `;

    const createSendmail = await iql.sendmail.create({
        data: {
            destinatario: "luis.espoladore@adcon.srv.br",
            html: Buffer.from(this.html),
            subject: "Gráfico de Barras - " + new Date().toLocaleDateString(),
            idsolicitante: 2,
            idusuarioaprovacao: 2,
            idusuariocotacao: 2,
            idusuarioaprovacaodir: 2,
            idusuariocompra: 2,
            idusuarioentrega: 2,
            idcompra: 1,
            idusercreateAt: 2,
        },
    });

    await iql.$disconnect();
}

main().catch(console.error);

