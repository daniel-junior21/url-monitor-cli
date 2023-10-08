const {Command} = require('commander');
const UrlController = require('./controller/urlController');
const Url = require('./model/url');
const urlRequest = require('./service/urlRequest');

async function main() {
    const program = new Command();

    program
        .name('url-monitor')
        .description('CLI to monitor URLs')
        .version('1.0.0')
        .option('-u, --url [value]', 'Url parameter to use in the options')
        .option('-i, --id [value]', 'Id parameter to use in the options')
        .option('-a, --add [value]', 'Add a new url to the url list *need url')
        .option('-d, --delete [id]', 'Delete a n url from url list *need id')
        .option('-up, --update [value]', 'Update an url from url list *need id and the new url')
        .option('-r, --read', 'Return the url list')
        .option('-ml, --monitoringList', 'Run monitoring activity using url list')
        .option('-m, --monitoring', 'Run monitoring activity of specific url *need url')
        .parse();

    const url = new Url(program.opts());
    
    try {
        if(program.opts().add) {
            const result = await UrlController.addUrl(url.url);
            
            console.log(result);
        }

        if(program.opts().read) {
            const result = await UrlController.getFileData();

            console.table(result, ['id', 'url'])
        }

        if(program.opts().update) {
            const result = await UrlController.updateUrl(url.id, url.url);

            console.log(result);
        }

        if(program.opts().delete) {
            const result = await UrlController.deleteUrl(url.id);
            
            console.log(result);
        }

        if(program.opts().monitoringList) {
            const urls = await UrlController.getFileData();
            let result = [];
            
            for(let url in urls) {
                const status = await urlRequest.executeRequest(urls[url].url)
                result.push({...urls[url], ...status})
            }
            console.table(result)
        }

        if(program.opts().monitoring) {
            const urlMonitoring = url.url;
            let result = [];
        
            const status = await urlRequest.executeRequest(urlMonitoring);
            result.push({url: urlMonitoring, ...status});

            console.table(result, ['url', 'statusCode', 'statusMessage']);
        }

    } catch(error) {
        console.log('Error', error);
    }


}

main();