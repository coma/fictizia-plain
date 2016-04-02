if (process.env.NODE_ENV) {

    return;
}

const fs     = require('fs'),
      prompt = require('prompt');

const schema = {
    properties: {
        port: {
            description: 'local site port',
            type       : 'integer',
            default    : 5000
        },
        proxyPort: {
            description: 'webpack proxy port',
            type       : 'integer',
            default    : 5001
        }
    }
};

prompt.message = '';
prompt.start();
prompt.get(schema, (error, result) => {

    fs.writeFileSync('config.json', JSON.stringify(result, null, 4));
});