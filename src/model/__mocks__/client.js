const client = jest.createMockFromModule('../client.js');

function getData() {
    return 'Test World';
};

client.getData = getData;

module.exports = client;