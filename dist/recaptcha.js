"use strict";
// import functions from 'firebase-functions'
// import requestPromise from 'request-promise'
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRecaptcha = void 0;
const authenticateRecaptcha = async (req, res) => {
    try {
        const response = req.query.response;
        console.log('recaptcha response', response);
        // const result = await requestPromise({
        //     uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
        //     method: 'POST',
        //     formData: {
        //         secret: 'PASTE_YOUR_SECRET_CODE_HERE',
        //         response: response
        //     },
        //     json: true
        // })
        const result = { success: true };
        console.log('recaptcha result', result);
        if (result.success) {
            res.send("You're good to go, human.");
        }
        else {
            res.send('Recaptcha verification failed. Are you a robot?');
        }
    }
    catch (error) {
        console.error('Recaptcha request failure', error);
        res.send('Recaptcha request failed.');
    }
};
exports.authenticateRecaptcha = authenticateRecaptcha;
