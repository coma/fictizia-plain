if (process.env.NODE_ENV === 'production') {

    module.exports = {
        port: process.env.PORT
    };

} else {

    module.exports = require('./local.json');
}