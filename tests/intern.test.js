const Intern = require('../lib/Intern');
 
test('creates an Intern object', () => {
    const intern = new Intern('Laura', 1, 'trapaga9@gmail.com', 'UGA');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Laura', 1, 'trapaga9@gmail.com', 'UGA');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Laura', 1, 'trapaga9@gmail.com', 'UGA');

    expect(intern.getRole()).toEqual("Intern");
});