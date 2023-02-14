// mock using jest mock functions
// export const mockGetText = jest.fn(() => `__mocks__ ServerClass.getText()`);
export const mockGetText = jest.fn().mockImplementation(() => `__mocks__ ServerClass.getText()`);

// mock with jest.fn()
// can't use mock functions to spy on properties
// can use mock functions to spy on method calls
const serverClass = jest.fn().mockImplementation(() => {
    return {
        'text': `__mocks__ ServerClass.text`,
        getText: mockGetText
    }
})

export default serverClass

// mock by reimplementing class
// can't use mock functions to spy on properties or method calls
// class ServerClass {
//     get text() {
//         return `__mocks__ ServerClass.text`;
//     }
    
//     getText() {
//         return `__mocks__ ServerClass.getText()`;
//     }
// }

// export default ServerClass;