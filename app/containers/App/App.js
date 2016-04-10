import React, { PropTypes } from 'react';
/* This is main app which will render with every page
	Add Header / Footer here  */
export const App = props => (
  <div>
    <div>
      {props.children}
    </div>
  </div>
);
App.propTypes = {
  children: PropTypes.object
};
