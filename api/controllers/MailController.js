/**
 * MailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
        send: (mailDetails) => {
        
        var nodemailer = require('nodemailer');
        var hbs = require('nodemailer-express-handlebars');
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: ' ',
                pass: ' '
            }
        });
        transporter.use('compile', hbs({
            viewEngine: {
                extName: ".hbs",
                partialsDir: "./views",
                layoutsDir: "./views",
                defaultLayout: "",
            },
            viewPath: "./views/",
            extName: ".hbs",
        }));
        
         var mailOptions = {
            from: 'Hassan Ademuyiwa ✔ <ademuyiwahassan68@gmail.com>',
            ...mailDetails
         }
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('Message sent: ' + info.response);
            }
        });
        
        
        
        }
};


