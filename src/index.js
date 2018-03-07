import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import registerServiceWorker from './registerServiceWorker';
const MyApp = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);
ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
