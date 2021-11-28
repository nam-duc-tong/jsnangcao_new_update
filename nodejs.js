//cach tao ra 1 server don gian cua nodejs
const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("Hello Tong Duc Nam");
});
server.listen(3000);