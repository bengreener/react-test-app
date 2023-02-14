const server = {};

function getText() {
    return `It's a modular World :-)`;
};

server.getText = getText;

module.exports = server;