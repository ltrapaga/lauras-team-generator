const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Laura Trapaga', 1, 'trapaga9@gmail.com', 100);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Laura Trapaga', 1, 'trapaga9@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});