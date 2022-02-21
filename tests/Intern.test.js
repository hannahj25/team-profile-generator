const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should create an object containing the properties of name, id, email and school", () => {
        const intern = new Intern('Hannah', 4, 'han@mail.com', 'Code School');

        expect(intern.name).toEqual('Hannah');
        expect(intern.id).toEqual(4);
        expect(intern.email).toEqual('han@mail.com');
        expect(intern.school).toEqual('Code School');
    });
});

describe("getSchool", () => {
    it("should return intern's school", () => {

        const intern = new Intern('Hannah', 4, 'han@mail.com', 'Code School')

        expect(intern.getSchool()).toEqual('Code School');
    })
})

describe("getName", () => {
    it("should return intern's name", () => {

        const intern = new Intern('Hannah', 4, 'han@mail.com', 'Code School')

        expect(intern.getName()).toEqual('Hannah');
    })
})

describe("getId", () => {
    it("should return intern's id", () => {
        
        const intern = new Intern('Hannah', 4, 'han@mail.com', 'Code School')

        expect(intern.getId()).toEqual(4);
    })
})

describe("getEmail", () => {
    it("should return intern's' email address", () => {
        
        const intern = new Intern('Hannah', 4, 'han@mail.com', 'Code School')

        expect(intern.getEmail()).toEqual('han@mail.com');
    })
})

describe("getRole", () => {
    it("should return role as 'Intern' ", () => {
        
        const intern = new Intern('Hannah', 4, 'han@mail.com', 'Code School')

        expect(intern.getRole()).toEqual('Intern');
    })
})