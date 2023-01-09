const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Laura Trapaga', 2, 'trapaga9@gmail.com', 'ltrapaga');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Laura Trapaga', 2, 'trapaga9@gmail.com', 'ltrapaga');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Laura Trapaga', 2, 'trapaga9@gmail.com', 'ltrapaga');

    expect(engineer.getRole()).toEqual("Engineer");
});