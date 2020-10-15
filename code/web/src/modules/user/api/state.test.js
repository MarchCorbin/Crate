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
});