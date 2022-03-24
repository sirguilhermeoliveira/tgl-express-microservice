const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

const port = 3000

const SMTP_HOST = "smtp.mailtrap.io"
const SMTP_PORT = 2525
const SMTP_USERNAME = "215c86ae655976"
const SMTP_PASSWORD = "1c1f91eaa6e783"

app.get('/', (req, res) => res.send('Hello World'))

app.get('/send', (req, res) => {

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: {user: SMTP_USERNAME,
    pass: SMTP_PASSWORD}
})
    transporter.sendMail({
        to: "sirguilhermeoliveira@gmail.com",
        from: "sirguilhermeoliveira@gmail.com",
        subject: "Teste",
        replyTo: "sirguilhermeoliveira@gmail.com",
        text: "Hello Kafka!"
    }).then(info => {
        console.log('200?')
        res.send(info)
    }).catch(error =>{
        console.log('NOT 200')
        res.send(error)
    })

})

app.listen(port, () => console.log(`Running on port ${port}`))