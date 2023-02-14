// const server = jest.createMockFromModule('../server.js');
const server = {};

function getText() {
    return '__mocks__ server getText()';
};

server.getText = getText;

module.exports = server;