import * as actionTypes from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];
    case actionTypes.SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}