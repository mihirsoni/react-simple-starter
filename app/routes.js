import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    App,
    Home,
    Categories,
    BookingForm,
    BookingSearch
  } from 'containers';

export default () => (
    <Route path="/" component={App}>
      <IndexRoute component={App} />
    </Route>
);
