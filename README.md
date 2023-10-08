## Introduction
This is a CLI App that provides a simple way to monitoring a specific or a list of urls.

With the features available in this CLI App you could manage a list of URLs or just start monitoring a specific URL in a few steps.

Managing URLs:
[![read-option](https://github.com/daniel-junior21/url-monitor-cli/blob/main/docs/read-option.png?raw=true)](https://github.com/daniel-junior21/url-monitor-cli)

Monitoring URL List:
[![read-option](https://github.com/daniel-junior21/url-monitor-cli/blob/main/docs/monitoringList-option.png?raw=true)](https://github.com/daniel-junior21/url-monitor-cli)

Monitoring specific URL:
[![read-option](https://github.com/daniel-junior21/url-monitor-cli/blob/main/docs/monitoring-option.png?raw=true)](https://github.com/daniel-junior21/url-monitor-cli)
## Requirements
    
- Node.js `>=16.0.0`

## Technologies Used
- Node.js
- Commander.js
- Axios.js
- Mocha.js
- Istanbull (nyc)

## Installation

First clone or make a fork of the project. After finish, run the command to install the dependencies:
```sh
npm i
```

## CLI

This App provides a simple CLI to allow the monitoring of URLs.

The available options are:

| Option            | Description                                            |
|-------------------|--------------------------------------------------------|
| -u, --url         | set url parameter to use in the options                |
| -i, --id          | set id parameter to use in the options                 |
| -a, --add         | add a new url to the url list *need url                |
| -d, --delete      | delete a n url from url list *need id                  |
| -up, --update     | update an url from url list *need id and the new url   |
| -r, --read        | return the url list                                    |
| -m, --monitoring | run monitoring activity of specific url *need url       |
| -ml, --monitoringList | run monitoring activity using url list             |

## Execution

To start working with this CLI App, you just need to execute the option of monitoring specific URL -m option and specifing the url with -u option, as the follow example:

```sh
node src/index.js -m -u https://www.google.com
```

Or if you would like to handle multiple URLs and have control over them, you will need first add the URLs that you would like to monitor using -a option, as the follow example:

```sh
node src/index.js -a -u https://www.google.com
node src/index.js -a -u https://github.com
node src/index.js -a -u https://www.instagram.com
```

And then, start monitoring all URLs in the URL list using -ml option, as the follow example:

```sh
node src/index.js -ml
```

## Contact
Having problems and need help? want to contribute?
contact me by email or linkedin.

[![Email:](https://img.shields.io/badge/-danieljunior.dev@gmail.com-white?style=flat&logo=gmail&link=mailto:danieljunior.dev@gmail.com)](mailto:danieljunior.dev@gmail.com)

[![Linkedin: danieljunior](https://img.shields.io/badge/-Daniel%20Junior-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/danielcolijr/)](https://www.linkedin.com/in/danielcolijr/)