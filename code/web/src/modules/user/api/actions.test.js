import * as actions from './actions';

describe('actions', () => {
  it.skip('should have a type of GET_USER_DETAILS', () => {
    const user = { name: "ABC" }
    const expectedAction = {
      type: 'AUTH/GET_USER_DETAILS',
      user: { name: "ABC" }
    }

    const result = actions.getDetails(user)

    expect(result).toEqual(expectedAction)
  });
});