import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  let testInitialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(testInitialState);
  });

  it('should store the token upon login', () => {
    expect(reducer(testInitialState, { 
      type: actionTypes.AUTH_SUCCESS,
      idToken: 'some-token',
      userId: 'some-userId' })).toEqual({
        token: 'some-token',
        userId: 'some-userId',
        error: null,
        loading: false,
        authRedirectPath: '/'
      });
  });
});