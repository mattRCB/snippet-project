import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

const props = {};
render(<App {...props} />, document.getElementById('root'));
