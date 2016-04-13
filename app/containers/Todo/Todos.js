import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from 'redux/reducers/todo';
import { TodoList, AddTodo } from 'components';
const Todos = props => (
  <div>
    <TodoList
      todos = {props.todos}
      toggleTodo = {props.actions.toggleTodo}
    />
    <AddTodo addTodo = {props.actions.addTodo} />
  </div>
);

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}
export default connect(
 mapStateToProps,
 mapDispatchToProps,
)(Todos);
