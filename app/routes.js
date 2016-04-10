import React from 'react';
import { Route } from 'react-router';
import {
    App,
    Todo
  } from 'containers';

export default () => (
    <Route path="/" component={App}>
      <Route path="todo" component={Todo} />
    </Route>
);
