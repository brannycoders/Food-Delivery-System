const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
    },
});

class EmailHelper {
    async sendEmail(to, subject, text) {
        const mailOptions = {
            from: 'your-email@gmail.com',
            to,
            subject,
            text,
        };
        return await transporter.sendMail(mailOptions);
    }
}

module.exports = new EmailHelper();
