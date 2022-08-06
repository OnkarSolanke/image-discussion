import emailjs from '@emailjs/browser';

const sendEmail = (email, msg) => {

    emailjs.send('service_bm4jxfb', 'template_1se7yrk', { email: email, message: msg }, 'Z8gRYu7fIRESuJ-sh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};

export { sendEmail }