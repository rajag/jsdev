//register Babel to transfile before test run
require('babel-register')();
//disable webpack features that mocha doesn't understand
require.extensions['.css'] = function(){};