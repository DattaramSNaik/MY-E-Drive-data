const lib = require("../lib");
const db = require("../db");
const exercies = require("../exercise1");
const fetchData = require("../callback");
const promies = require("../promies");
const mail = require("../mail");
describe("absolute", () => {
  it("should return positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  it(" should return positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  it(" should return zero if input is zero", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
});

describe("greet", () => {
  it(" should return a greeting message", () => {
    const result = lib.greet("akshay");
    expect(result).toMatch(/akshay/);
    expect(result).toContain("akshay");
  });
});
describe("getCurrencies", () => {
  it(" should return all supported getCourrencies", () => {
    const result = lib.getCurrencies();
    expect(result).toBeDefined();
    //expect(result).not.toBeNull();
    //Specific expectation
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");
    //correct expectation
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");
    //ideal way
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});
describe("getProduct", () => {
  it(" should return a product with given productId", () => {
    const result = lib.getProduct(1);
    expect(result).toHaveProperty("id", 1);
    expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toMatchObject({ id: 1, price: 10 });
  });
});

describe("registerUser", () => {
  it(" should throw an error is falsy", () => {
    let arr = [undefined, null, NaN, "", false, 0];
    arr.forEach((a) => expect(() => lib.registerUser(a)).toThrow());
  });
  it(" should return user object username", () => {
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
    db.getCustomerSync = jest.fn().mockReturnValue({ id: 1, points: 20 });
    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe("notifyCustomer", () => {
  it("should send email to the customer when ordr is placed", () => {
    db.getCustomerSync = jest.fn().mockReturnValue({ email: "a" });
    mail.send = jest.fn();
    const order = {
      customerId: 1,
      totalPrice: 10,
    };
    lib.notifyCustomer(order);
    expect(mail.send).toHaveBeenCalled();
    expect(mail.send.mock.calls[0][0]).toBe("a");
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
    expect(mail.send.mock.calls[0][1]).toBe(
      "Your order was placed successfully."
    );
  });
});

describe("fizzBuzz", () => {
  it(" should be a number ", () => {
    const result = exercies.fizzBuzz(2);
    expect(result).toBe(2);
    expect(result).not.toBe(3);
  });
  it("should be a number ", () => {
    const result = exercies.fizzBuzz(-1); //Parameter received
    expect(result).toBe(-1); //except
  });

  it(" should divisable by the given number 3", () => {
    const result = exercies.fizzBuzz(3); //Parameter received
    expect(result).toBe("Fizz"); //except
  });
  it("should divisable by the given number 5", () => {
    const result = exercies.fizzBuzz(5); //Parameter received
    expect(result).toBe("Buzz"); //except
  });
  it("should divisable by the given number 5 & 3 ", () => {
    const result = exercies.fizzBuzz(15); //Parameter received
    expect(result).toBe("FizzBuzz"); //except
  });
});
//callback
describe("feachdata", () => {
  it("callback function testing", () => {
    function callback(data) {
      expect(data).toBe("Hello callback");
    }
    fetchData(callback);
  });
});

describe("PromiseData", () => {
  it("async function testing", async () => {
    const result = await promies.promiseData();
    expect(result).toBe("done");
    expect(result).toEqual("done");
  });
});
