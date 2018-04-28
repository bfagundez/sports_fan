import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/flaticon.css';
import App from 'containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.css'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
