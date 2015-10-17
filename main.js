var ffi = require('ffi');
var ref = require('ref');
var Struct = require('ref-struct');

var RowStruct = Struct({
    'id': 'int',
    'name': 'string'
})

var libUtil = ffi.Library('libmyutil', {
    'double_it': [ 'int', [ 'int' ] ],
    'print_it': [ 'void', [ RowStruct ]]
});

function testDoubleIt() {
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
}

function testPrintIt() {
    var testObject = new RowStruct({
        id: 1,
        name: 'Row 1'
    });
    libUtil.print_it(testObject);
}

testPrintIt();