import userReducer from './state.js'

describe('userReducer', () => {
  it('should return initial state', () => {
    // Setup
    const expected = {
      "details": null,
      "error": null,
      "isAuthenticated": false,
      "isLoading": false,
    }

    // Execution
    const result = userReducer(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should return the updated state', () => {
    // Setup
    const initialState = {
      "details": null,
      "error": null,
      "isAuthenticated": false,
      "isLoading": false,
    }

    const user = { name: "Bob" }

    const action = {
      type: "AUTH/GET_USER_DETAILS", 
      user
     }

    const expected = {
      "details": user,
      "error": null,
      "isAuthenticated": false,
      "isLoading": false,
    }

    // Execution
    const result = userReducer(initialState, action);

    // Expectation
    expect(result).toEqual(expected);
  });
});