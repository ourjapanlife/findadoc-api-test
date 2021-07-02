// import functions from 'firebase-functions'
import requestPromise from 'request-promise'

exports.authenticateRecaptcha = async (req, res) => {
    try {

        const response = req.query.response
        console.log("recaptcha response", response)
        const result = await requestPromise({
            uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
            method: 'POST',
            formData: {
                secret: 'PASTE_YOUR_SECRET_CODE_HERE',
                response: response
            },
            json: true
        })

        console.log("recaptcha result", result)
        if (result.success) {
            res.send("You're good to go, human.")
        }
        else {
            res.send("Recaptcha verification failed. Are you a robot?")
        }
    } catch (error) {
        console.error("Recaptcha request failure", error)
        res.send("Recaptcha request failed.")
    }
})
