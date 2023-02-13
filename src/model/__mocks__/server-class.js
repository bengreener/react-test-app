// mock using a mock functions
// export const mockGetText = jest.fn().mockImplementation(() => `It's a functional mock server client world`);
export const mockGetText = jest.fn(() => `It's a functional mock server client world`); 

const serverClass = jest.fn().mockImplementation(() => {
    return {
        'text': `It's a mock server client world`,
        getText: mockGetText
    }
})

export default serverClass

// mock by reimplementing class
// class ServerClass {
//     get text() {
//         return `It's a mock server client world`;
//     }
    
//     // getText() {
//     //     return `It's a functional mock server client world`;
//     // }
//     getText() {
//         return `It's a functional mock server client world`;
//     }
// }

// export default ServerClass;