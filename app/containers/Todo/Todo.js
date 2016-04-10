import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from 'redux/reducers/todo';

class Todo extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  }
  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos.map(todo =>
          <div>
            {todo.text}
            </div>
        )}
      </div>
    );
  }
}

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
)(Todo);
