'use strict';

const test1 = require('./test1');

class P {
    p() {
        return new test1.Y();
    }
}

module.exports = {
    P
};
