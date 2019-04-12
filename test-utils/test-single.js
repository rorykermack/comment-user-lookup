var shell = require('shelljs');
var fileToTest = process.argv[2];
shell.exec('TS_NODE_COMPILER_OPTIONS=\'{"module":\"commonjs\"}\' NODE_ENV=\"test\" mocha -r ts-node/register '+fileToTest+' --require ignore-styles');