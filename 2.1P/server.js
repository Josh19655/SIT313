const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const sgMail = require('@sendgrid/mail')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/subscribe', async (req, res) => {
    let email = req.body.email

    if (!email) {
        return res.status(400).json({ error: 'Email is required' })
    }

    const msg = {
        to: email,
        from: process.env.FROM_EMAIL, 
        subject: 'Welcome to our Daily Insider!',
        text: 'Thank you for subscribing to our Daily Insider newsletter. Stay tuned for more updates!',
        html: '<h1>Thank you for subscribing to our Daily Insider newsletter. Stay tuned for more updates!</h1>'
    }

    try {
        await sgMail.send(msg)
        console.log('Email sent to', email)
        res.status(200).json({ message: 'Subscription successful, email sent!' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to send email' })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})