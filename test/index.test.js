const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

// Test #1
describe("capitalizeWords", () => {
  it("capitalizes the first letter in string)", () => {
    
    // Define test value
    const input = "my string"

    // Pass test value as argument to capitalizeWords()
    const output = capitalizeWords(input) 
    

    // Check that return value "output" is a string with each word capitalized
    expect(output).toBe("My String");
  });
});

// Test #2
describe("filterActiveUsers", () => {
  it("Test that it correctly filters active users from an array)", () => {
    
    // Define test value
    const users = [
        {
            name: "Alice",
            isActive: true
        },
        {
            name: "Becky",
            isActive: false
        }
    ]

    // Pass test value as argument to filterActiveUsers()
    const output = filterActiveUsers(users)
    

    // Check that return value "output" is an array of all active users
    const expectedOutput = [
        {
        name: "Alice",
        isActive: true
        }
    ]
    expect(output).toStrictEqual(expectedOutput);
  });
});

// Test #3
describe("logAction", () => {
  it("generates the correct log string for valid inputs)", () => {
    
    // Define test value
    const action = "login"
    const username = "Alice"
    const timestamp = new Date().toISOString()

    // Pass test value as argument to logAction()
    const output = logAction(action, username)    
    

    // Check that return value "output" is a string that provides the username, action, and the timestamp
    expect(output).toBe(`User ${username} performed ${action} at ${timestamp}`);
  });
});