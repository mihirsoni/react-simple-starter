import React, { PropTypes } from 'react';

export const Todo = props => (
  <li
    onClick = {props.onClick}
    style = {{ textDecoration: props.completed ? 'line-through' : 'none' }}
  >
    {props.text}
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
