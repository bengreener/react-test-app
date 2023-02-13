const server = {};

function getData() {
    return 'Hello World :-)';
};

server.getData = getData;

module.exports = server;