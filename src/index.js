import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App initialMessage="Hello 401" initialColor="#4682b4" initialFontSize="12px" initialBackgroundColor="#D8DBD4" initialFontFamily="arial" />, document.getElementById('root'));

registerServiceWorker();