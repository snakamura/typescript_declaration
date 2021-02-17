'use strict';

class X {}

class Y {}

const classes = { X, Y };

class Z extends X {}

classes.Z = Z;

module.exports = classes;

// This won't happen when you modify module.exports directly.
// module.exports = { X, Y };
// module.exports.Z = Z;
