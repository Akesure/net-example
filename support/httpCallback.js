const crypto = require('crypto');


const maxCount = 1000;

/**
 *
 * @param req
 * @param res
 */
module.exports = function (req, res) {
    let body = 'Hello World';
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain'
    });
    res.write(body);
    res.end('ok');
    // let c = maxCount;
    // while (c > 0) {
    //     crypto.createHmac('sha256', new Buffer(c))
    //         .update('I love Node.js')
    //         .digest('hex');
    //     c--;
    // }
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World\n');
};
