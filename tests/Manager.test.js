const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should create an object containing the properties of name, id, email and officeNumber", () => {
        const manager = new Manager('Hannah', 2, 'han@mail.com', 123456789);

        expect(manager.name).toEqual('Hannah');
        expect(manager.id).toEqual(2);
        expect(manager.email).toEqual('han@mail.com');
        expect(manager.officeNumber).toEqual(123456789);
    });
});

describe("getOfficeNumber", () => {
    it("should return manager's officeNumber", () => {

        const manager = new Manager('Hannah', 2, 'han@mail.com', 123456789)

        expect(manager.getOfficeNumber()).toEqual(123456789);
    })
})

describe("getName", () => {
    it("should return manager's name", () => {

        const manager = new Manager('Hannah', 2, 'han@mail.com', 123456789)

        expect(manager.getName()).toEqual('Hannah');
    })
})

describe("getId", () => {
    it("should return manager's id", () => {
        
        const manager = new Manager('Hannah', 2, 'han@mail.com', 123456789)

        expect(manager.getId()).toEqual(2);
    })
})

describe("getEmail", () => {
    it("should return manager's email address", () => {
        
        const manager = new Manager('Hannah', 2, 'han@mail.com', 123456789)

        expect(manager.getEmail()).toEqual('han@mail.com');
    })
})

describe("getRole", () => {
    it("should return role as 'Manager' ", () => {
        
        const manager = new Manager('Hannah', 2, 'han@mail.com', 123456789)

        expect(manager.getRole()).toEqual('Manager');
    })
})