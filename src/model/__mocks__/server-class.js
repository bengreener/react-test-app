// mock using a mock functions);
// export const mockGetText = jest.fn(() => `Mock server class operation text`);
export const mockGetText = jest.fn().mockImplementation(() => `Mock server class operation text`);

// mock with jest.fn()
// can use mock functions to spy on operation calls
const serverClass = jest.fn().mockImplementation(() => {
    return {
        'text': `Get mock server class text`,
        getText: mockGetText
    }
})

export default serverClass

// mock by reimplementing class
// can't use mock functions to spy on calls
// class ServerClass {
//     get text() {
//         return `Get mock server class text`;
//     }
    
//     getText() {
//         return `Mock server class operation text`;
//     }
// }

// export default ServerClass;