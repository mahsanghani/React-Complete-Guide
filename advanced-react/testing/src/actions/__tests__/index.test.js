import * as actions from 'actions';
import * as actionTypes from 'actions/types';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = actions.saveComment();
    expect(action.type).toEqual(actionTypes.SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const action = actions.saveComment('New Comment');
    expect(action.payload).toEqual('New Comment');
  });
});