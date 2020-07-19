var fetch = require('node-fetch')
const API_URL = process.env.REACT_APP_API_URL

function fetchLocation(){
    return fetch(API_URL)
        .then(res => {
            return res.status === 200 ?
                res.json() :
                Promise.reject('Error in response')
        })
        .catch(err =>{
            console.log(err);
        });
}

module.exports = fetchLocation;