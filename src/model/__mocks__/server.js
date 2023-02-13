const server = jest.createMockFromModule('../server.js');

function getData() {
    return 'Test World';
};

server.getData = getData;

module.exports = server;