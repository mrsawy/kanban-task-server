// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable default middlewares (logger, static, cors, no-cache)
server.use(middlewares);

// Add manual CORS handling
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});

server.use(router);

// Start server
server.listen(4000, '0.0.0.0', () => {
    console.log('🚀 JSON Server running on port 4000');
});
