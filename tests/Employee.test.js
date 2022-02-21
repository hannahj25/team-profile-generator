const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should create an object containing the properties of name, id and email", () => {
        const employee = new Employee('Hannah', 1, 'han@mail.com');

        expect(employee.name).toEqual('Hannah');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('han@mail.com');
    });
});

describe("getName", () => {
    it("should get employee's name", () => {

        const employee = new Employee('Hannah', 1, 'han@mail.com')

        expect(employee.getName()).toEqual('Hannah');
    })
})

describe("getId", () => {
    it("should get employee's id", () => {
        
        const employee = new Employee('Hannah', 1, 'han@mail.com')

        expect(employee.getId()).toEqual(1);
    })
})

describe("getEmail", () => {
    it("should get employee's email address", () => {
        
        const employee = new Employee('Hannah', 1, 'han@mail.com')

        expect(employee.getEmail()).toEqual('han@mail.com');
    })
})

describe("getRole", () => {
    it("should return role as 'Employee' ", () => {
        
        const employee = new Employee('Hannah', 1, 'han@mail.com')

        expect(employee.getRole()).toEqual('Employee');
    })
})
