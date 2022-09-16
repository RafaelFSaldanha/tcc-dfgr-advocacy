import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: process.env.mysql_HOST,
    user: process.env.mysql_USER,
    password: process.env.mysql_PWD,
    database: process.env.mysql_DB
})

console.log("BD CONECTADO")

export {con}