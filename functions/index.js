const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

const axios = require('axios')
const DOMAIN = 'http://www.lvp.es/api'

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.lvp = functions.https.onRequest((request, response) => {
    
    cors(request, response, () => {
        const params = request.url
        const path = `${DOMAIN}${params}`
    
        return axios.get(path)
            .then((res) => {
                return response.send(res.data)
            })
            .catch((res) => {
                response.send(res)
            })
    })
    
})
