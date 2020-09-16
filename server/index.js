require('dotenv').config()
const axios = require('axios')
const redux = require('redux')
const controller = require('./controller')
const massive = require('massive')
const express = require('express')
const app = express()

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env


app.use(express.json())


app.post('/controller/register', controller.register)











massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false},
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log("DB is connected")
    app.listen(SERVER_PORT, () =>
    console.log(`It's working on port ${SERVER_PORT}`) )
})
