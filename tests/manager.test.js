const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Laura', 1, 'trapaga9@gmail.com', 2);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Laura', 1, 'trapaga9@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});