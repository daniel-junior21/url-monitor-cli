const Axios = require('axios');
const Response = require('../model/response');

exports.executeRequest = async (url) => {
    const config = {
        method: 'get',
        url: url
    }
   
    return Axios(config).then((res) => {
        return new Response(res.status, res.statusText);
    }).catch((error) => {
        if(error.code === 'ENOTFOUND') {
            return new Response(error.errno, error.code);
        } else {
            return new Response(error.response.status, error.response.statusText);
        }
    })
}