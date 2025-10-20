const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', (err) => {
        if (err) {
            console.error('Error sending index.html:', err);
            res.status(500).send('Error loading the homepage');
        }
    });
});

app.post('/', async (req, res) => {
    const { Email } = req.body;

    if (!Email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const msg = {
        to: Email,
        from: process.env.SENDGRID_SENDER, 
        subject: 'Welcome to our Daily Insider!',
        text: 'Thank you for subscribing to our Daily Insider newsletter. Stay tuned for more updates!',
        html: '<h1>Thank you for subscribing to our Daily Insider newsletter. Stay tuned for more updates!</h1>',
    };

    try {
        await sgMail.send(msg);
        console.log('Email sent successfully to:', Email);
        res.status(200).json({ message: 'Subscription successful, email sent!' });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
