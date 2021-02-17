'use strict';

class X {}

class Y {}

const classes = {
    X, Y,
};

module.exports = classes;

// It won't happen when you export X and Y directly.
//module.exports = { X, Y, };
