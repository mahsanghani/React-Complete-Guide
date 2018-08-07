import axios from 'axios';
import * as actionTypes from 'actions/types';

export function saveComment(comment) {
  return {
    type: actionTypes.SAVE_COMMENT,
    payload: comment
  }
}

export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  return {
    type: actionTypes.FETCH_COMMENTS,
    payload: response
  }
}

export function changeAuth(isLoggedIn) {
  return {
    type: actionTypes.CHANGE_AUTH,
    payload: isLoggedIn
  }
}