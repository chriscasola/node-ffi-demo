var ffi = require('ffi');
var Struct = require('ref-struct');

var RowMetadata = Struct({
    'data_type': 'string',
    'group_path': 'string'
});

var RowStruct = Struct({
    'id': 'int',
    'name': 'string',
    'metadata': RowMetadata
});

var libUtil = ffi.Library('libmyutil', {
    'double_it': [ 'int', [ 'int' ] ],
    'print_it': [ RowStruct, [ RowStruct ]]
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
    var testRowMeta = new RowMetadata({
        data_type: 'float',
        group_path: 'a|b|c'
    });

    var testObject = new RowStruct({
        id: 1,
        name: 'Row 1',
        metadata: testRowMeta
    });
    var returnedObject = libUtil.print_it(testObject);
    console.log('\nReturned object:', JSON.stringify(returnedObject));
}

testPrintIt();