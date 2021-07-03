// import functions from 'firebase-functions'
import requestPromise from 'request-promise'

export const authenticateRecaptcha = async (req: any, res: any) => {
    try {
        const token = req.query.token
        console.log('recaptcha token', token)
        const result = await requestPromise({
            uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
            method: 'POST',
            formData: {
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: token
            },
            json: true
        })

        console.log('recaptcha result', result.data)
        if (result.data.success) {
            res.send('Recaptcha score', result.data.score)
        } else {
            res.send('Recaptcha verification failed. Are you a robot?')
        }
    } catch (error) {
        console.error('Recaptcha request failure', error)
        res.send('Recaptcha request failed.')
    }
}
