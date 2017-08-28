"use strict";
const { Transform } = require('stream');
const fs = require('fs');
const path = require('path');

class MyTransform extends Transform {
    constructor(options) {
        super(options);

    }
    /**
     * transform
     * @param {(Buffer|String)} chunk - chunkddddddddf dfdfd
     * @param {String} encoding - ech
     * @param {Function} callback - ddddddddddd
     */
   
    _transform(chunk, encoding, callback) {
        var data = new Buffer(chunk.length);
        var str = chunk.toString('utf8');
        // for (var i = 0, offset = 0; i < str.length; i++) {
        //     if (/^[a-z]+$/.test(str[i])) {
        //         offset += data.write(str[i].toUpperCase(), offset);
        //     } else {
        //         offset += data.write(str[i], offset);
        //     }
        // }
        // this.push(data);
    
        this.push(Buffer.from(str.toUpperCase()));
        callback();
    }

    _flush(cb) {
        cb();
    }
}
var upper = new MyTransform();

var inFile = fs.createReadStream(path.join(__dirname,'test','lower.txt'),'utf8');

var outFile = fs.createWriteStream(path.join(__dirname,'test','upper.txt'),{defaultEncoding: 'utf8'});

inFile.pipe(upper).pipe(outFile);