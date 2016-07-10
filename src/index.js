import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './ui/App';

render(
	<App />,
	document.getElementById('main-wrap')
)