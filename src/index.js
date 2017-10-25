import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App2';
import bookStore from './bookstore'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App bookStore={bookStore}  />, document.getElementById('root'));
registerServiceWorker();
