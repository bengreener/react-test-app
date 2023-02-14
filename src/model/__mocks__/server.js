const server = jest.createMockFromModule('../server.js');

function getData() {
    return 'Module text';
};

server.getData = getData;

module.exports = server;