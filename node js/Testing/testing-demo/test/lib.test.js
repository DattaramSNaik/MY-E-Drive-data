const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");

//toBe:-to test exact equality.
//toBe:- toBe to compare primitive values or to check referential identity of object instances. It calls Object.is to compare values, which is even better for testing than === strict equality operator.
describe("absolute", () => {
  it("should return positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  it("should return Negative number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  it("should return zero if input is zero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});
//toMatch to check that a string matches a regular expression
describe("greet", () => {
  it(" should return a greeting message", () => {
    const result = lib.greet("Akshay");
    expect(result).toBe("Welcome Akshay"); //check output equality
    expect(result).toMatch(/Akshay/); //Match With Parameter
    expect(result).toContain("Akshay"); //can also check whether a string is a substring of another string.
  });
});

describe("getCurrencies", () => {
  it(" should return All supported getCurrencies ", () => {
    const result = lib.getCurrencies();
    expect(result).toContain("USD"); //check data present or not inside array
    expect(result).toBeDefined(); //toBeDefined to check that a variable is not undefined.
    expect(result).not.toBeNull(); //when you want to check that something is null.
    //Specific expectation
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");
    //correct expectation
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");
    //ideal way
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD"])); //check specified element presnt or not
  });
});
describe("getProduct", () => {
  it(" should return a product with given productId", () => {
    const result = lib.getProduct(2);
    expect(result).toHaveProperty("price", 10); // to check for the existence and values of various properties in the object.
    expect(result).toHaveProperty("id", 2);
    expect(result).toEqual({ id: 2, price: 10 }); //check all values give inside object
    expect(result).toMatchObject({ price: 10 }); //chek inside element
  });
});

describe("registerUser", () => {
  it(" should throw an error is falsy", () => {
    let arr = [undefined, null, NaN, "", false, 0];
    arr.forEach((a) => expect(() => lib.registerUser(a)).toThrow());
  });
  it("should return user object username", () => {
    const result = lib.registerUser("akshay");
    expect(result).toHaveProperty("username", "akshay");
    expect(result).toMatchObject({
      username: "akshay",
    });
  });
});

describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    //The jest. fn method allows us to create a new mock function directly. If you are mocking an object method, you can use jest.
    db.getCustomerSync = jest.fn().mockReturnValue({ id: 1, points: 70 });
    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe("notifyCustomer", () => {
  it("should send email to the customer when ordr is placed", () => {
    db.getCustomerSync = jest.fn().mockReturnValue({ email: "akshay" });
    mail.send = jest.fn();
    const order = {
      customerId: 1,
      totalPrice: 10,
    };
    lib.notifyCustomer(order);
    expect(mail.send).toHaveBeenCalled();
    expect(mail.send.mock.calls[0][0]).toBe("akshay");
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});
