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
const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASWORD}@cluster0.xtnpv4r.mongodb.net/${process.env.DBNAME}`
mongoose.connect(uri, {
    useNewUrlParser: true
}).then(() =>{
    console.log('Conectado a BD')
}).catch(e => {
    console.log('error', e)
})

//importar Rutas 
const authRoutes = require('./routes/auth')

//ruta del Middleware
app.use('/api/user', authRoutes)

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