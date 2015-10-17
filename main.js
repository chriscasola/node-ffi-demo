var ffi = require('ffi');

var libUtil = ffi.Library('libmyutil', {
    'double_it': [ 'int', [ 'int' ] ]
});

function node_double_it(num) {
    return num * 2;
}

console.time('cpp');
for (var i=0; i < 10000; i++) {
    libUtil.double_it(4);
}
console.timeEnd('cpp');

console.time('node');
for (i=0; i < 10000; i++) {
    node_double_it(4);
}
console.timeEnd('node');