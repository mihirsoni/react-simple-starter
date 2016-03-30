import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import getRoutes from './routes';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

const component = (
	<Provider store={store} key="provider">
		<Router history={browserHistory}>
			{getRoutes()}
		</Router>
	</Provider>
);
render(component, document.getElementById('root'));
