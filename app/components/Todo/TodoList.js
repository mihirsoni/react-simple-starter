import React, { PropTypes } from 'react';
import { Todo } from './Todo';

export const TodoList = props => (
  <ul>
    {props.todos.map(todo =>
      <Todo
        key={todo.id}
        onClick = {() => props.toggleTodo(todo.id)}
        {...todo}
      />
    )}
  </ul>
);
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired
};
