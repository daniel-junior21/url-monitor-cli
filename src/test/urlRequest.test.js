const assert = require('assert');
const urlRequest = require('./../service/urlRequest');

const MOCK_URL_LIST = [
    {id: 1, url: "https://www.google.com"},
    {id: 2, url:"https://api.openweathermap.org/data/2.5/weather?lat=2&lon=1"}
];

const MOCK_SPECIFIC_URL = 'https://www.google.com';
const MOCK_SPECIFIC_URL_ERROR = 'https://www.teste131w31.com';

describe('Test suit of url request', function () {
    it('Should return monitoring result with a url list', async () => {
        let result = [];
        for(let url in MOCK_URL_LIST) {
            const status = await urlRequest.executeRequest(MOCK_URL_LIST[url].url);
            result.push({...MOCK_URL_LIST[url], ...status});
        }

        assert.ok(result.length > 0);
    })

    it('Should return monitoring result with a specific url', async () => {
        let result = [];
        
        const status = await urlRequest.executeRequest(MOCK_SPECIFIC_URL);
        result.push({url: MOCK_SPECIFIC_URL, ...status});

        assert.ok(result.length > 0);
    })

    it('Should return monitoring result error case, due inexistent url', async () => {
        let result = [];
        
        const status = await urlRequest.executeRequest(MOCK_SPECIFIC_URL_ERROR);
        result.push({url: MOCK_SPECIFIC_URL, ...status});

        assert.ok(result.length > 0);
    })
})