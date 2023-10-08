const fs = require('node:fs');
const Url = require('./../model/url');

class UrlController {
    constructor() {
        this.FILE_NAME = 'src/urls.json';
    }

    async getFileData() {
        const data = await fs.readFileSync(this.FILE_NAME, 'utf-8');
        return JSON.parse(data.toString());
    }

    async writeFileData(data) {
        await fs.writeFileSync(this.FILE_NAME, JSON.stringify(data));
        return true;
    }

    async addUrl(url) {
        if(!url) {
            return 'Url is null or empty';
        }

        const id = new Date().getTime();
        const newItem = new Url({id, url});

        const data = await this.getFileData();
        const newData = [...data, newItem];

        const result = await this.writeFileData(newData);

        if(result) {
            return 'Url added with sucess!';
        } else {
            return 'Error trying add url!';
        }
    }

    async getUrlDataByUrl(url) {
        if(!url) {
            return 'Url is null or empty';
        }

        const data = await this.getFileData();
        const result = data.filter(item => item.url === url);

        return result;
    }

    async getUrlDataById(urlId) {
        if(!urlId) {
            return 'urlId is null or empty';
        }

        const data = await this.getFileData();
        const result = data.filter(item => item.id === urlId);

        return result;
    }

    async updateUrl(urlId, url) {
        const urlData = await this.getFileData();
        const indexToUpdate = urlData.findIndex(item => item.id === parseInt(urlId));
        if(indexToUpdate === -1) {
            return 'urlId not exists!';
        }

        const urlDataToUpdate = urlData[indexToUpdate];
        urlDataToUpdate.url = url;
        urlData[indexToUpdate] = urlDataToUpdate;
        const result = await this.writeFileData(urlData);

        if(result) {
            return 'Url updated with success!';
        } else {
            return 'Error trying update url!';
        }

    }

    async deleteUrl(urlId) {
        if(!urlId) {
            return 'urlId is null or empty';
        }

        const urlData = await this.getFileData();
        const indexToDelete = urlData.findIndex(item => item.id === parseInt(urlId));
        if(indexToDelete === -1) {
            return 'urlId not exists!';
        }
        urlData.splice(indexToDelete, 1);
        const result = await this.writeFileData(urlData);

        if(result) {
            return 'Url deleted with success!';
        } else {
            return 'Error trying delete url!';
        }
    }
}

module.exports = new UrlController();