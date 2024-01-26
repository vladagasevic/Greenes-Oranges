import type { NextApiRequest, NextApiResponse } from "next";

export default function handler (req: NextApiRequest, res: NextApiResponse){
    console.log('Data', req.body)

    const SibApiV3Sdk = require('sib-api-v3-typescript');
 
    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.NEXT_PUBLIC_BREVO_API;

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); 

    sendSmtpEmail.subject = "My {{params.subject}}";
    // sendSmtpEmail.htmlContent = "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
    sendSmtpEmail.htmlContent = 
    sendSmtpEmail.sender = {"name":"Greenes Contact Form","email":"contact@greenes1.vtsnis.edu.rs"};
    sendSmtpEmail.to = [{"email":"vlada.gasha@gmail.com","name":"ITS Group Orangees"}];
    sendSmtpEmail.replyTo = {"email":"contact@greenes1.vtsnis.edu.rs","name":"John Doe"};
    // sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
    sendSmtpEmail.params = {"parameter":"My param value","subject":"Contact form"};

    apiInstance.sendTransacEmail(sendSmtpEmail)
    // .then(function(data) {
    // console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    // }, function(error) {
    // console.error(error);
    // });

        res.status(200).json({name: 'VTS'})
}