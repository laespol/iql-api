var express = require('express');
var app = express();
const sql = require('mssql');

async () => {
    try {
        console.log('Try');
        await sql.connect('Server=192.168.9.31,1433;Database=corp;User Id=sa;Password=TInfo@2398;Encrypt=true')
        console.log('conec');
        const result = await sql.query`select * from dbo.capa_op`
        console.dir(result)
    } catch (err) {
        console.log(err);
    }
}