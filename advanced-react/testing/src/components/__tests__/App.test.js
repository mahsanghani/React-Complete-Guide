import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('shows a comment box', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CommentList).length).toEqual(1);
});