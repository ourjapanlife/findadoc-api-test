"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRecaptcha = void 0;
// import functions from 'firebase-functions'
const request_promise_1 = __importDefault(require("request-promise"));
const authenticateRecaptcha = async (req, res) => {
    try {
        const response = req.query.response;
        console.log('recaptcha response', response);
        const result = await request_promise_1.default({
            uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
            method: 'POST',
            formData: {
                secret: 'PASTE_YOUR_SECRET_CODE_HERE',
                response: response
            },
            json: true
        });
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
