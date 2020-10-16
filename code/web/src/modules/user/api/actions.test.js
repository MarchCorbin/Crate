import * as actions from './actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore()

describe('actions', () => {
  it('should have a type of GET_USER_DETAILS', () => {
		const user = { name: "ABC" }
		
    const expectedAction = {
			type: 'AUTH/GET_USER_DETAILS',
      user: { name: "ABC" }
    }
		
		store.dispatch(actions.getDetails(user))
		expect(store.getActions()).toEqual([expectedAction])
  })
})