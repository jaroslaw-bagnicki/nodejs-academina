const http = require('http');

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
            <form action="/send-message" method="POST">
                <input name="message" type="text"/>
                <button type="submit">Submit</button>
            </form>
        `);
        res.write('</body>');
        res.write('</html');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>'); 
    res.write('<title>Hello World Page</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Hello World!</h1>');
    res.write('</body>');
    res.write('</html');
    res.end();
});

server.listen(3000);
