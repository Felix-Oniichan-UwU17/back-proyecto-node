//declaracion de constantes 
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

//capturar el body 
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//conexion a la Base de Datos 

//importar Rutas 

//ruta del Middleware
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'WORKS FINE!!!'
    })
})

//Inicializaf Srevidor 
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Servidor Corriendo${PORT}`)
})