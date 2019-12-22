const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const { url, method, headers } = req;
    console.log({ url, method, headers });

    if ( url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Hello World Page</title>');
        res.write('</head>');
        res.write('<body>');
        res.write(`
            <form action="/message" method="POST">
                <input name="message" type="text"/>
                <button type="submit">Submit</button>
            </form>
        `);
        res.write('</body>');
        res.write('</html');
        return res.end();
    }
    if ( url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY_TEXT');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404;
    res.statusMessag = 'Page not found';
    res.write('Not Found');
    res.end();
});

server.listen(3000);
