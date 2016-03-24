import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import getRoutes from './routes';

const component = (
	<Router history={browserHistory}>
		{getRoutes()}
	</Router>
);
render(component, document.getElementById('root'));
