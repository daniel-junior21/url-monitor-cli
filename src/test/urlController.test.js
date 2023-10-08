const assert = require('assert');
const UrlController = require('./../controller/urlController');

const MOCK_ADD_URL = 'https://www.test.com';
const MOCK_UPDATE_URL = 'https://www.test2.com';
let MOCK_ID = '';


describe('Test suit of url manipulation', function () {

    before(async () => {
        await UrlController.addUrl(MOCK_ADD_URL);
        const [result] = await UrlController.getUrlDataByUrl(MOCK_ADD_URL);
        MOCK_ID = result.id;
    });

    it('Should add a new url', async () => {
        const result = await UrlController.addUrl(MOCK_ADD_URL);

        const expected = 'Url added with sucess!';
        
        assert.equal(result, expected);
    })

    it('Should return error trying to add a new url with empty url', async () => {
        const result = await UrlController.addUrl('');
        const expected = 'Url is null or empty';

        assert.equal(result, expected)
    })

    it('Should return the data from file storage', async () => {
        const result = await UrlController.getFileData();

        assert.ok(result.length > 0);
    })

    it('Should return url data using url', async () => {
        const result = await UrlController.getUrlDataByUrl(MOCK_ADD_URL);

        assert.ok(result)
    })

    it('Should return error trying get url data using empty url', async () => {
        const result = await UrlController.getUrlDataByUrl('');

        const expected = 'Url is null or empty';
        assert.equal(result, expected);
    })

    it('Should return url data using id', async () => {
        const result = await UrlController.getUrlDataById(MOCK_ID);

        assert.ok(result.length > 0);
    })

    it('Should return error trying get url data using empty id', async () => {
        const result = await UrlController.getUrlDataById('');
        const expected = 'urlId is null or empty';

        assert.equal(result, expected);
    })

    it('Should update an url using id', async () => {
        const update = await UrlController.updateUrl(MOCK_ID, MOCK_UPDATE_URL);
        const [result] = await UrlController.getUrlDataById(MOCK_ID);

        const expected = {
            id: MOCK_ID,
            url: MOCK_UPDATE_URL
        }

        assert.equal(update, 'Url updated with success!');
        assert.deepEqual(result, expected);
    })

    it('Should return error trying to update an url with wrong id', async () => {
        const result = await UrlController.updateUrl(123, 'https://www.google.com');
        const expected = 'urlId not exists!';

        assert.equal(result, expected);
    })

    it('Should delete an url using id', async () => {
        const result = await UrlController.deleteUrl(MOCK_ID);
        const expected = 'Url deleted with success!';

        assert.equal(result, expected);
    })

    it('Should return error trying to delete an url with wrong id', async () => {
        const result = await UrlController.deleteUrl(123);
        const expected = 'urlId not exists!';

        assert.equal(result, expected);
    })

    it('Should return error trying to delete an url with empty id', async () => {
        const result = await UrlController.deleteUrl('');
        const expected = 'urlId is null or empty';

        assert.equal(result, expected);
    })

});