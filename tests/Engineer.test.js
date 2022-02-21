const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should create an object containing the properties of name, id, email and github username", () => {
        const engineer = new Engineer('Hannah', 3, 'han@mail.com', 'hannahj25');

        expect(engineer.name).toEqual('Hannah');
        expect(engineer.id).toEqual(3);
        expect(engineer.email).toEqual('han@mail.com');
        expect(engineer.github).toEqual('hannahj25');
    });
});

describe("getGithub", () => {
    it("should return engineer's github username", () => {

        const engineer = new Engineer('Hannah', 3, 'han@mail.com', 'hannahj25')

        expect(engineer.getGithub()).toEqual('hannahj25');
    })
})

describe("getName", () => {
    it("should return engineer's name", () => {

        const engineer = new Engineer('Hannah', 3, 'han@mail.com', 'hannahj25')

        expect(engineer.getName()).toEqual('Hannah');
    })
})

describe("getId", () => {
    it("should return engineer's id", () => {
        
        const engineer = new Engineer('Hannah', 3, 'han@mail.com', 'hannahj25')

        expect(engineer.getId()).toEqual(3);
    })
})

describe("getEmail", () => {
    it("should return engineer's' email address", () => {
        
        const engineer = new Engineer('Hannah', 3, 'han@mail.com', 'hannahj25')

        expect(engineer.getEmail()).toEqual('han@mail.com');
    })
})

describe("getRole", () => {
    it("should return role as 'Engineer' ", () => {
        
        const engineer = new Engineer('Hannah', 3, 'han@mail.com', 'hannahj25')

        expect(engineer.getRole()).toEqual('Engineer');
    })
})