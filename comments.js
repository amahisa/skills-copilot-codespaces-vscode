// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const comments = require('./comments');

const server = http.createServer((req, res) => {
    if (req.url === '/comments' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments.getComments()));
    } else if (req.url === '/comments' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            comments.addComment(JSON.parse(body));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(comments.getComments()));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
// comments.js
// Create comments module
let comments = [];
module.exports = {
    getComments: () => comments,
    addComment: comment => {
        comments.push(comment);
    }
};