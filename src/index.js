import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import PropTypes from 'prop-types';

// Disable prop validation
PropTypes.checkPropTypes = () => {};

// Your other code here...


const root = document.getElementById('root');
createRoot(root).render(<App />);
