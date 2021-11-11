const nodemailer = require('nodemailer');

const sendCommitmail = (mail,userName) => {
    return new Promise((resolve, reject) => {
        
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '***@gmail.com',
                pass: process.env.MAIL_PASSWORD
            }
        });

        var mailOptions = {
            from: '***@gmail.com',
            to: mail,
            subject: 'Sending Email using Node.js',
            html: `<h1 style="background-color:red;font-weight:bold;direction:ltr">${userName} Welcome To Weather Application :)</h1>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error);
            } else {
                resolve('Email sent: ' + info.response);
            }
        });
    })
}
module.exports = sendCommitmail;