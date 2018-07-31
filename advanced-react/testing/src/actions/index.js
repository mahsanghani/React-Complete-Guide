import * as actionTypes from 'actions/types';

export function saveComment(comment) {
  return {
    type: actionTypes.SAVE_COMMENT,
    payload: comment
  }
}