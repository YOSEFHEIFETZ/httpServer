const http = require('http');
const fs = require('fs')
const isPrime = require('prime-number')
const isfactorial = require('./factorial')

http.createServer(function (req, res) {

    if (req.url === '/pages') {
        fs.readFile('pages.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
   
    if (req.url ===  '/files') {
        fs.readFile('files.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }

    // if (req.url === '/files') {
    //     res.write(`<a href="files/people">people</a> \n 
    //     <a href="files/shops">shops</a>`);
    //     res.end();
    // }

    if (req.url === '/pages/about') {
        fs.readFile('about.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }

    if (req.url === '/pages/sports') {
        fs.readFile('sports.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }

    if (req.url === '/files/people') {
        fs.readFile('peopleList.txt', function (err, peoples) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(peoples);
            res.end();
        });
    }

    if (req.url === '/files/shops') {
        fs.readFile('shopsList.txt', function (err, shops) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(shops);
            res.end();
        });
    }

    if (req.url === '/contacts') {
        fs.readFile('contacts.json', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(data)
            res.end();
        });
    }

    if (req.url.startsWith('/contacts/')) {
        let num = req.url.split('/')[2]
        fs.readFile('contacts.json', function (err, data) {
            if (!JSON.parse(data)[num - 1]) {
                res.write("not fond")
                res.end();
                return
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(JSON.parse(data)[num - 1]))
            res.end();
        });
    }
    if (req.url === '/comps') {
        fs.readFile('comps.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }

    if (req.url.startsWith('/comps/primes/')) {
        let num = req.url.split('/')[3]
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(isPrime(num) ? `${num} is prime` : `${num} is not prime`)
        res.end();
    }

    if (req.url.startsWith('/comps/factorial/')) {
        let num = req.url.split('/')[3]
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(isfactorial.factorial(num))
        res.end();
    }

}).listen(8080);


