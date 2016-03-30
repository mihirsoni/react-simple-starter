import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from 'redux/reducers/todo';

class App extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  }
  state = {
    show: false
  }
  render() {
    const { todos } = this.props;
    console.log('all todos are ', todos);
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
  console.log('state for mihir is ', state);
  return {
    todos: state.todo
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
