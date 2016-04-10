import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import getRoutes from './routes';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
});
const component = (
	<Provider store={store} key="provider">
		<Router history={history}>
			{getRoutes()}
		</Router>
	</Provider>
);
render(component, document.getElementById('root'));
