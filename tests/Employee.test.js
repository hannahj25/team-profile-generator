const Employee = require("./lib/Employee");

describe("Employee", () => {
    it("should create an object containing the properties of name, id and email", () => {
        const employee = new Employee('Hannah', 1, 'han@mail.com');

        expect(employee.name).toEqual('Hannah');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('han@mail.com');
    });
});