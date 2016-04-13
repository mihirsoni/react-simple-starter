import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { text: '' };
  }
  onChange(e) {
    this.setState({ text: e.target.value });
  }
  addTodo(e) {
    e.preventDefault();
    if (!this.state.text.trim()) {
      return;
    }
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  }
  render() {
    return (
      <form onSubmit = {this.addTodo} >
        <input type="text" id="todo" name="todo"
          value = {this.state.text}
          onChange = {this.onChange}
        />
        <button type="submit">
          AddTodo
        </button>
      </form>
    );
  }
}
