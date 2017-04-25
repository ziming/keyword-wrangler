'use strict';

(function() {
    var env;

    // This will detect the environment based on a shell environment variable named KW_ENV
    if (process.env.KW_ENV) {
        env = process.env.KW_ENV;
    } else {
        env = 'test';
    }

    if (!( env === 'test'
        || env === 'dev'
        || env === 'production')) {
        throw new Error('"' + env + '" is not an allowed environment');
    }

    module.exports = env;
})();